import { Controller, Get } from "@nestjs/common";


@Controller("api/health")
export class HealthController {
    @Get()
    check() {
        const params = {
            status: "ok",
            timestamp: new Date().toISOString(),
        };

        return params;
    }
}
