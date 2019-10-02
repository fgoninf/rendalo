import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from '../../../dao/Categories.dao';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories) private categoriesRepository: Repository<Categories>) { }
    
    async getCategories(): Promise<any> {
        return this.categoriesRepository.find();
    }
}