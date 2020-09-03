import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {

  transform(value: any) {
    if (typeof value !== 'string') {
      throw new BadRequestException(`Provided status ${value} must be typeof String`)
    }
    const transformedValue = value.toUpperCase()

    if (!this.isStatusValid(transformedValue)) {
      throw new BadRequestException(`Provided status ${value} is invalid`)
    }

    return transformedValue;
  }

  private isStatusValid(status: any): boolean {
    return Object.keys(TaskStatus).includes(status)
  }
}