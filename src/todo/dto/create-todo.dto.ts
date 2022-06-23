import { Todo } from "../entities/todo.entity";

export class CreateTodoDto {
    id: string;
    name: string;
    description?: string
}
