import { TaskStatus } from "../task-status.enum";
import { IsOptional, IsNotEmpty } from "class-validator";

export class GetFilterDto {

  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
