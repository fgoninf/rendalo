import { Test, TestingModule } from '@nestjs/testing';
import { DriversService } from './drivers.service';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Drivers } from '../../../dao/Drivers.dao';
import { Repository } from 'typeorm';



describe('DriversService', () => {
  let service: DriversService;
  let repository: Repository<Drivers>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DriversService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(Drivers),
          // as a class value, Repository needs no generics
          useClass: Repository,
        },]      
    }).compile();
    

    service = module.get<DriversService>(DriversService);
    repository = module.get<Repository<Drivers>>(getRepositoryToken(Drivers));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the stored driver', async () => {
    const driver = {
      name: "Sebastian",
      lastName: "Vettel",
      categoryId: 1
    }
    const result = {
      id: 1,
      name: "Michael",
      lastName: "Schumacher",
      categoryId: 1,
      category: {
        id: 1,
        name: "Formula 1"
      }
    };
    jest.spyOn(repository, 'save').mockImplementation(async () => result);

    expect(await service.saveDriver(driver)).toBe(result);
  });
});
