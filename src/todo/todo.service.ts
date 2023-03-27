import { Injectable } from '@nestjs/common';

export interface Todo {
  id?: number;
  title: string;
  description: string;
}

@Injectable()
export class TodoService {
  getAllTodos(): string {
    return 'This is getAllTodosMethod from service!';
  }

  getTodo(id): string {
    return 'getOneTodo with id = ' + id;
  }

  createTodo(params): string {
    return 'create todo';
  }

  updateTodo(params): string {
    return 'Update todo';
  }

  deleteTodo(id): string {
    return 'delete todo with id = ' + id;
  }
}
