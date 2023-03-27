import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoInterface } from './interface/todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  async getAllTodos(): Promise<TodoInterface[]> {
    return this.service.getAllTodos();
  }

  @Get(':id')
  async getTodo(@Param() params): Promise<TodoInterface> {
    const id = params.id;
    const Todo = await this.service.getTodo(id);

    if (Todo) {
      return Todo;
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  async createTodo(@Body() todo: TodoInterface): Promise<TodoInterface> {
    return this.service.createTodo(todo);
  }

  @Put(':id')
  async updateTodo(
    @Param() params,
    @Body() todo: TodoInterface,
  ): Promise<TodoInterface> {
    const id = params.id;
    const Todo = await this.service.updateTodo(id, todo);

    if (Todo) {
      return Todo;
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  @Delete(':id')
  async deleteTodo(@Param() params): Promise<TodoInterface> {
    const Todo = await this.service.deleteTodo(params.id);

    if (Todo) {
      return Todo;
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
