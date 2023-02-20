import { Controller, Get, Param, Put } from '@nestjs/common';
import { HomeService } from './home.service';
import { Home } from 'src/entities/home.entities';

@Controller('/homes')
export class HomesController {
  constructor(private readonly homesService: HomeService) {}

  @Get()
  search(): Promise<Home[]> {
    return this.homesService.getAll();
  }
}
