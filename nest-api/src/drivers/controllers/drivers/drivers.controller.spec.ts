import { Test, TestingModule } from '@nestjs/testing';
import { DriversController } from './drivers.controller';
import { DriversService } from '../../services/drivers/drivers.service'
import { getRepositoryToken } from '@nestjs/typeorm';
import { Drivers } from '../../../dao/Drivers.dao';
import { Repository } from 'typeorm';

describe('Drivers Controller', () => {
  let controller: DriversController;
  let service: DriversService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriversController],
      providers: [
        DriversService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(Drivers),
          // as a class value, Repository needs no generics
          useClass: Repository
        }
      ]
    }).compile();

    service = module.get<DriversService>(DriversService);
    controller = module.get<DriversController>(DriversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of drivers', async () => {
    const result = [{
      id: 1,
      name: "Michael",
      lastName: "Schumacher",
      categoryId: 1,
      category: {
        id: 1,
        name: "Formula 1"
      }
    }];
    jest.spyOn(service, 'getDrivers').mockImplementation(async () => result);

    expect(await controller.getDrivers()).toBe(result);
  });

  it('should return an array of drivers', async () => {
    const post = {
      name: "Sebastian",
      lastName: "Vettel",
      categoryId: 1
    };
    const result = [{
      id: 1,
      name: "Michael",
      lastName: "Schumacher",
      categoryId: 1,
      category: {
        id: 1,
        name: "Formula 1"
      }
    }];
    jest.spyOn(service, 'saveDriver').mockImplementation(async () => result);

    expect(await controller.postDriver(post)).toBe(result);
  });
});
