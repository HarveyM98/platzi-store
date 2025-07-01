import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
  ) {
    return `Brands limit => ${limit} offset=> ${offset}`;
  }
  @Get(':brandId')
  getBrand(@Param('brandId') brandId: number) {
    return `Brand ID : ${brandId}`;
  }
}
