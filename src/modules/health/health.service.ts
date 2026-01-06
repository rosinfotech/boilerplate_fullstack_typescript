import type { HealthCheckResult, HealthIndicatorResult } from "@nestjs/terminus";
import type { IHealthModuleOptions } from "./types";
import { Inject, Injectable } from "@nestjs/common";
import { HealthCheckService } from "@nestjs/terminus";


@Injectable()
export class HealthService {
    constructor(
        @Inject("HEALTH_MODULE_OPTIONS")
        private readonly options: IHealthModuleOptions,
        private readonly health: HealthCheckService
    ) {}

    async checkLive(): Promise<HealthCheckResult> {
        const params = { options: this.options };
        const { options } = params;

        const checks = options.serviceName
            ? [async (): Promise<HealthIndicatorResult> => this.serviceCheck()]
            : [];

        return this.health.check(checks);
    }

    async checkReady(): Promise<HealthCheckResult> {
        const params = { options: this.options };
        const { options } = params;

        const checks = options.serviceName
            ? [async (): Promise<HealthIndicatorResult> => this.serviceCheck()]
            : [];

        return this.health.check(checks);
    }

    private serviceCheck(): HealthIndicatorResult {
        const params = { options: this.options };
        const { options } = params;

        return {
            service: {
                serviceName: options.serviceName,
                status: "up",
            },
        };
    }
}
