import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 4321;
  // const port = process.env.PORT || 4321;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen(port, () => console.log(`servet run on ${port}`));
}

bootstrap();
