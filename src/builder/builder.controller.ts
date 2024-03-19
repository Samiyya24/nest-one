import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';
import { Builder } from './models/builder.model';

@Controller("builder")
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @Post()
  async createBuilder(
    @Body() createBuilderDto: CreateBuilderDto
  ): Promise<Builder> {
    return this.builderService.createBuilder(createBuilderDto);
  }

  @Get()
  async getAllBuilders(): Promise<Builder[]> {
    return this.builderService.getAllBuilders();
  }

  @Get("/:id")
  async getBuilderById(@Param("id") id: number): Promise<Builder> {
    return this.builderService.getBuilderById(id);
  }

  @Delete("/:id")
  async deleteBuilderById(@Param("id") id: number): Promise<number> {
    return this.builderService.deleteBuilderById(id);
  }

  @Put("/:id")
  async updateBuilderById(
    @Param("id") id: number,
    @Body() updateBuilderDto: UpdateBuilderDto
  ) {
    return this.builderService.updateBuilderById(id, updateBuilderDto);
  }
}
