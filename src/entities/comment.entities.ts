import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Home } from 'src/entities/home.entities';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  profilePicture: string;

  @Column()
  date: string;

  @Column()
  comment: string;

  @ManyToOne(() => Home)
  home: Home;
}
