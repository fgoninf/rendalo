import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from '../../services/categories/categories.service';

@Controller('categories')
export class CategoriesController {    
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    getCategories(): Promise<any> {
        return this.categoriesService.getCategories();
    }

}
