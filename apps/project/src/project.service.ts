import { CommonService } from '@app/common';
import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs'

@Injectable()
export class ProjectService {
    constructor(private readonly commonService: CommonService) {}

    sayHello() {
        return this.commonService.sayHello(ProjectService.name);
    }
}
