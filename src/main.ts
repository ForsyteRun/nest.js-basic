import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const port = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(port, () => console.log(`start on ${port}`));
};

bootstrap();
