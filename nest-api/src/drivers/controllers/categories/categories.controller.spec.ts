import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from '../../services/categories/categories.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from '../../../dao/Categories.dao';

describe('Categories Controller', () => {
  let controller: CategoriesController;
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        CategoriesService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(Categories),
          // as a class value, Repository needs no generics
          useClass: Repository
        }
      ]
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of categories', async () => {
    const result = [{
      id: 1,
      name: "Formula 1"
    }];
    jest.spyOn(service, 'getCategories').mockImplementation(async () => result);

    expect(await controller.getCategories()).toBe(result);
  });
  
});
