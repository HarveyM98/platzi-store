import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dto';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit => ${limit} offset=> ${offset} brand => ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getFilter() {
    return { message: 'Yo soy un filter' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    //Con Express
    // return response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
