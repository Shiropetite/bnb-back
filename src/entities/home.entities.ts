import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entities';
import { Image } from './image.entities';
import { Owner } from './owner.entities';

@Entity()
export class Home {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  city: string;

  @Column()
  region: string;

  @Column()
  country: string;

  @Column()
  category: string;

  @Column()
  maxTraveler: number;

  @Column()
  nbRooms: number;

  @Column()
  nbBeds: number;

  @Column()
  nbBathrooms: number;

  @Column()
  price: number;

  @Column()
  score: number;

  @OneToMany(() => Image, (image) => image.home)
  images: Image[];

  @Column()
  description: string;

  @OneToMany(() => Comment, (comment) => comment.home)
  comments: Comment[];

  @ManyToOne(() => Owner)
  owner: Owner;
}
