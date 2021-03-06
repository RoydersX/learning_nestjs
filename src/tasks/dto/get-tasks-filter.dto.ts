import { TaskStatus } from "../task-status.enum";
import { IsOptional, IsNotEmpty, IsIn } from "class-validator";


export class GetFilterDto {

  @IsOptional()
  @IsIn(Object.values(TaskStatus))
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
