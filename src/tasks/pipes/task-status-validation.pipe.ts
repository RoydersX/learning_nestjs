import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {

  readonly allowedStatuses = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];

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
    return this.allowedStatuses.includes(status)
  }
}