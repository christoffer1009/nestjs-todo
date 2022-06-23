import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {

  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>){

  }

  async create(createTodoDto: CreateTodoDto) {
    const newTodo = new this.todoModel(createTodoDto); 
    await this.todoModel.create(newTodo)
    return newTodo;
  }

  findAll() {
    return this.todoModel.find().exec();
  }

  findOne(id: string) {
    return this.todoModel.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    await this.todoModel.findByIdAndUpdate(id, updateTodoDto);
    return updateTodoDto;
  }

  remove(id: string) {
    return this.todoModel.findByIdAndDelete(id);    
  }
}
