import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Catch } from '@nestjs/common';
import { error } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 const config = new DocumentBuilder()
    .setTitle('Simple Storage dApp API')
    .setDescription(`Nama : Raditya Zuhdi Fernanda
NIM  : 241011401330

The Simple Storage dApp description`)
    .setVersion('1.0')
    .addTag('simple-storage')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, documentFactory);

  await app.listen(process.env.PORT || 3000);
}
bootstrap().catch((error) => {
  console.error("Error during application bootstrap:", error);
  process.exit(1);
});
