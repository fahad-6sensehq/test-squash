import { CommonService } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StageService {
    constructor(private readonly commonService: CommonService) {}

    getHello() {
        return this.commonService.sayHello(StageService.name);
    }
}
