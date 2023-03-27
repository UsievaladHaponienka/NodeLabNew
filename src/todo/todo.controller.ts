import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoInterface } from './interface/todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  async getAllTodos(): Promise<TodoInterface[] | string> {
    return this.service.getAllTodos();
  }

  @Get(':id')
  async getTodo(@Param() params): Promise<TodoInterface | string> {
    const id = params.id;
    return this.service.getTodo(id);
  }

  @Post()
  async createTodo(@Body() todo: TodoInterface): Promise<TodoInterface> {
    return this.service.createTodo(todo);
  }

  @Put(':id')
  async updateTodo(
    @Param() params,
    @Body() todo: TodoInterface,
  ): Promise<TodoInterface | string> {
    const id = params.id;
    return this.service.updateTodo(id, todo);
  }

  @Delete(':id')
  async deleteTodo(@Param() params): Promise<TodoInterface | string> {
    return this.service.deleteTodo(params.id);
  }
}
