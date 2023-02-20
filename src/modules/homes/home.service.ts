import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Models
import { Home } from 'src/entities/home.entities';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}

  getAll(): Promise<Home[]> {
    return this.homeRepository.find({
      relations: ['comments', 'owner', 'images'],
    });
  }
}
