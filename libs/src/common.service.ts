import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
    sayHello(service: string) {
        return `Hello from ${service}`;
    }
}
