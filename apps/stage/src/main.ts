import { NestFactory } from '@nestjs/core';
import { StageModule } from './stage.module';

async function bootstrap() {
    const app = await NestFactory.create(StageModule);
    await app.listen(3001);
    console.log(`Hello from Stage Monorepo. Running on port: 3001`);
}
bootstrap();
