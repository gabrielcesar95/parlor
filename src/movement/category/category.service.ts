import { Injectable } from '@nestjs/common'
import { CategoryCreateDto } from './dto/create-category.dto'
import { CategoryUpdateDto } from './dto/update-category.dto'

@Injectable()
export class CategoryService {
  create(createCategoryDto: CategoryCreateDto) {
    return 'This action adds a new category'
  }

  findAll() {
    return `This action returns all category`
  }

  findOne(id: number) {
    return `This action returns a #${id} category`
  }

  update(id: number, updateCategoryDto: CategoryUpdateDto) {
    return `This action updates a #${id} category`
  }

  remove(id: number) {
    return `This action removes a #${id} category`
  }
}
