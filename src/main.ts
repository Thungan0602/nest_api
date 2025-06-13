bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // Cho phép tất cả các origin. CHỈ DÙNG TRONG MÔI TRƯỜNG PHÁT TRIỂN!
  app.enableCors({
    origin: '*', // Cho phép mọi origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Cho phép các phương thức phổ biến
    credentials: true, // Quan trọng nếu bạn gửi cookie hoặc header Authorization
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');

  logger.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();