import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { Builder } from "./models/builder.model";
export declare class BuilderService {
    private builderRepo;
    constructor(builderRepo: typeof Builder);
    createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    getAllBuilders(): Promise<Builder[]>;
    getBuilderById(id: number): Promise<Builder>;
    deleteBuilderById(id: number): Promise<number>;
    updateBuilderById(id: number, updateBuilderDto: UpdateBuilderDto): Promise<Builder>;
}
