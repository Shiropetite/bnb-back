import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from 'src/entities/home.entities';
import { HomesController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  controllers: [HomesController],
  providers: [HomeService],
})
export class HomeModule {}
