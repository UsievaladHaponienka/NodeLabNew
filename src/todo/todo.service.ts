import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

export interface TodoInterface {
  id?: number;
  title: string;
  description: string;
}

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async getTodo(id: number): Promise<TodoInterface> {
    return await this.todoRepository.findOne({ where: { id } });
  }

  async createTodo(todo: TodoInterface): Promise<TodoInterface> {
    const Todo = await this.todoRepository.create({
      title: todo.title,
      description: todo.description,
    });
    return await this.todoRepository.save(Todo);
  }

  async updateTodo(id: number, todo: TodoInterface): Promise<TodoInterface> {
    await this.todoRepository.update(
      { id: id },
      {
        title: todo.title,
        description: todo.description,
      },
    );

    return this.getTodo(id);
  }

  async deleteTodo(id: number): Promise<TodoInterface> {
    const Todo = this.todoRepository.findOne({ where: { id } });
    await this.todoRepository.delete({ id: id });
    return Todo;
  }
}
