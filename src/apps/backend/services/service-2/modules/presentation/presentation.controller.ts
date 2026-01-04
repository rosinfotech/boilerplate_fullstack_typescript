import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";


@Controller()
export class PresentationController {
    @MessagePattern({ cmd: "check" })
    check() {
        const params = {
            service: "service-2",
            status: "ok",
            timestamp: new Date().toISOString(),
        };

        return params;
    }
}
