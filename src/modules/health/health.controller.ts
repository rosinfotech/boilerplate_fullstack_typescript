import type { HealthCheckResult } from "@nestjs/terminus";
import { Controller, Get } from "@nestjs/common";
import { HealthCheck } from "@nestjs/terminus";
import { HealthService } from "./health.service";


@Controller("health")
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get("live")
    @HealthCheck()
    checkLive(): Promise<HealthCheckResult> {
        return this.healthService.checkLive();
    }

    @Get("ready")
    @HealthCheck()
    checkReady(): Promise<HealthCheckResult> {
        return this.healthService.checkReady();
    }
}
