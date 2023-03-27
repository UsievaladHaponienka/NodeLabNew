import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TodoInterface } from './interface/todo.interface';

@Entity({ name: 'todo' })
export class Todo implements TodoInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
