import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'log', 'error']
  });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('v1/api')

  const options = new DocumentBuilder()
    .setTitle('Maintenance Manager API')
    .setDescription('The Maintenance Manager API description')
    .setVersion('1.0')
    .addTag('manager')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(9001);
}
bootstrap();
