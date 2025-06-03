import { CommonModule } from '@app/common';
import { Module } from '@nestjs/common';
import { StageController } from './stage.controller';
import { StageService } from './stage.service';

@Module({
    imports: [CommonModule],
    controllers: [StageController],
    providers: [StageService],
})
export class StageModule {}
