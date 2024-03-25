import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class CustomValidationPipe implements PipeTransform<any> {
    transform(value: any, metadate: ArgumentMetadata): Promise<any>;
}
