import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { CustomValidationPipe } from './pipe/validation.pipe';
import { ValidationPipe } from '@nestjs/common';

const start = async () => {
  try {
    const PORT = process.env.PORT
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe)
    // app.useGlobalPipes(new CustomValidationPipe())
      const config = new DocumentBuilder()
        .setTitle("Nest-One Project")
        .setDescription("Nest-One REST API")
        .setVersion("1.0")
        .addTag("NESTJS, Swagger, Validation, Sequelize")
        .build();
          const document = SwaggerModule.createDocument(app, config);
          SwaggerModule.setup("api/docs", app, document);
    await app.listen(PORT, () => {
      console.log(`Server ${PORT} portda ishga tushdi`);
    })
  } catch (error) {
    console.log(error);
  }
}
start();
