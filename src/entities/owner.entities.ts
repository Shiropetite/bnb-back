import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  profilePicture: string;
}
