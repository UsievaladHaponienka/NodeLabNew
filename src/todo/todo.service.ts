import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoInterface } from './interface/todo.interface';

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
    const TodoEntity = await this.todoRepository.findOne({ where: { id } });
    if (TodoEntity) {
      await this.todoRepository.update(
        { id: id },
        {
          title: todo.title,
          description: todo.description,
        },
      );

      return this.todoRepository.findOne({ where: { id: id } });
    }
  }

  async deleteTodo(id: number): Promise<TodoInterface> {
    const TodoEntity = this.todoRepository.findOne({ where: { id } });
    if (TodoEntity) {
      await this.todoRepository.delete({ id: id });
      return TodoEntity;
    }
  }
}
