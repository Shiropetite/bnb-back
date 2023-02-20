import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Home } from './home.entities';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => Home)
  home: Home;
}
