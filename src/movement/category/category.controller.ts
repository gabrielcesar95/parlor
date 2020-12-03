import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryCreateDto } from './dto/create-category.dto'
import { CategoryUpdateDto } from './dto/update-category.dto'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post()
  create(@Body() createCategoryDto: CategoryCreateDto) {
    return this.categoryService.create(createCategoryDto)
  }

  @Get()
  findAll() {
    return this.categoryService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: CategoryUpdateDto) {
    return this.categoryService.update(+id, updateCategoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id)
  }
}
