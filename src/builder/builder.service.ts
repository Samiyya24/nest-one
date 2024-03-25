import { Injectable } from "@nestjs/common";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Builder } from "./models/builder.model";

@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private builderRepo: typeof Builder) {}

  async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
    const builder = await this.builderRepo.create(createBuilderDto);
    return builder;
  }

  async getAllBuilders(): Promise<Builder[]> {
    return this.builderRepo.findAll({include:{all:true}});
  }

  async getBuilderById(id: number): Promise<Builder> {
    return this.builderRepo.findByPk(id);
  }

  async deleteBuilderById(id: number): Promise<number> {
    return this.builderRepo.destroy({ where: { id } });
  }
  
  async updateBuilderById(
    id: number,
    updateBuilderDto: UpdateBuilderDto
  ): Promise<Builder> {
    const builder = await this.builderRepo.update(updateBuilderDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0];
  }
}
