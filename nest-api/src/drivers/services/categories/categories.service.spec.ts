import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Categories } from '../../../dao/Categories.dao';
import { Repository } from 'typeorm';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let repository: Repository<Categories>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          // how you provide the injection token in a test instance
          provide: getRepositoryToken(Categories),
          // as a class value, Repository needs no generics
          useClass: Repository,
        },]      
    }).compile();
    

    service = module.get<CategoriesService>(CategoriesService);
    repository = module.get<Repository<Categories>>(getRepositoryToken(Categories));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
  it('should return an array of categories', async () => {
    const result = [{
      id: 1,
      name: "Formula 1"
    }];
    jest.spyOn(repository, 'find').mockImplementation(async () => result);

    expect(await service.getCategories()).toBe(result);
  });
});
