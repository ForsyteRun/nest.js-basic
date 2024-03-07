import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {PrismaService} from './prisma.service'

async function bootstrap() {
  const port = process.env.PORT || 5050;

  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');

  await app.listen(port, () => console.log(`servet run on ${port}`));
}

bootstrap();
