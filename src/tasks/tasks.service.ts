import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ){ }

  // async getTasks(): Promise<Task[]> {
  //   return this.taskRepository.
  // }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with Id ${id} not found`)
    }

    return found;
  }

  async createTask(createTaskdto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskdto);
  }

  async deleteTask(id: number): Promise<void> {
    const { affected } = await this.taskRepository.delete(id)

    if (affected === 0) {
      throw new NotFoundException(`Task with Id ${id} not found`)
    }
  }

  async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await task.save();
    return task;
  }
}
