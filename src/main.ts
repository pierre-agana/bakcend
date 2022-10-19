import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log("run 3000");
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  
}

bootstrap();
