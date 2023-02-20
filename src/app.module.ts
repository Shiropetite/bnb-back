import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './entities/home.entities';
import { Owner } from './entities/owner.entities';
import { HomeModule } from './modules/homes/home.module';
import { Comment } from './entities/comment.entities';
import { Image } from './entities/image.entities';

@Module({
  imports: [
    HomeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bnb-database.cqyghh3hwdbs.eu-west-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: '9d4yjV8Rx5LyB6',
      database: 'bnb_database',
      entities: [Home, Image, Comment, Owner],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
