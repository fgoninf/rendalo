import { Module } from '@nestjs/common';
import { DriversController } from './controllers/drivers/drivers.controller';
import { DriversService } from './services/drivers/drivers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drivers } from '../dao/Drivers.dao';
import { Categories } from '../dao/Categories.dao';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CategoriesService } from './services/categories/categories.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([Drivers, Categories])
    ],
    controllers: [DriversController, CategoriesController],
    providers: [DriversService, CategoriesService]
  })
export class DriversModule {}
