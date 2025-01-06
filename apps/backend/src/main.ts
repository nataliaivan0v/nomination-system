/**
 * Entry point for the NestJS application.
 * Configured for production readiness.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  // Create the application
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Set a global prefix for all routes
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Use global validation pipes with security practices
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,  // Automatically transform payloads to DTOs
      whitelist: true,  // Remove unexpected properties
      forbidNonWhitelisted: true,  // Reject requests with extra properties
    })
  );

  // Define the port from environment variables or use 4000 as default
  const port = process.env.PORT || 4000;

  // Start the server
  await app.listen(port);

  // Log that the app is running
  const environment = process.env.NODE_ENV || 'development';
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
    `Environment: ${environment}`
  );
}

bootstrap();
