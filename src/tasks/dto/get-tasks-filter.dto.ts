import { TaskStatus } from "../task-status.enum";
import { IsOptional, IsString, IsIn } from "class-validator";

export class GetFilterDto {

  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.DONE, TaskStatus.IN_PROGRESS])  
  status: TaskStatus;

  @IsOptional()
  @IsString()
  search: string;
}
