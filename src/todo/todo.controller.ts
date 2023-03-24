import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  getAllTodos(): string {
    return this.service.getAllTodos();
  }

  @Get(':id')
  getTodo(@Param() params): string {
    return this.service.getTodo(params.id);
  }

  @Post()
  createTodo(@Param() params): string {
    return this.service.createTodo(params);
  }

  @Put()
  updateTodo(@Param() params): string {
    return this.service.updateTodo(params);
  }

  @Delete(':id')
  deleteTodo(@Param() params): string {
    return this.service.deleteTodo(params.id);
  }
}
