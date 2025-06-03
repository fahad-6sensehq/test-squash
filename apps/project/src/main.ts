import { NestFactory } from '@nestjs/core';
import { ProjectModule } from './project.module';

async function bootstrap() {
    const app = await NestFactory.create(ProjectModule);
    await app.listen(3000);
    console.log(`Hello from Project Monorepo. Running on port: 3000`);
}
bootstrap();
