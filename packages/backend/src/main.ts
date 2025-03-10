import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // Global prefix for all routes
  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log('Backend service is running on port 3000');
}

bootstrap();
