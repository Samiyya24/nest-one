import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => {
      console.log(`Server ${PORT} portda ishga tushdi`);

    })
  } catch (error) {
    console.log(error);
  }
}
start();
