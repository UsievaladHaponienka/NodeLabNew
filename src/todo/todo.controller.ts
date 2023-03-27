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

@Controller('todo')
export class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  async getAllTodos() {
    return this.service.getAllTodos();
  }

  @Get(':id')
  async getTodo(@Param() params) {
    return this.service.getTodo(params.id);
  }

  @Post()
  async createTodo(@Body() params) {
    return this.service.createTodo(params);
  }

  @Put()
  async updateTodo(@Body() params) {
    return this.service.updateTodo(params);
  }

  @Delete(':id')
  async deleteTodo(@Param() params) {
    return this.service.deleteTodo(params.id);
  }
}
