import type { DynamicModule } from "@nestjs/common";
import type { IHealthModuleOptions } from "./types";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { HealthController } from "./health.controller";
import { HealthService } from "./health.service";


@Module({})
export class HealthModule {
    static forRoot(options: IHealthModuleOptions = {}): DynamicModule {
        return {
            controllers: [HealthController],
            exports: [HealthService],
            global: false,
            imports: [TerminusModule],
            module: HealthModule,
            providers: [
                {
                    provide: "HEALTH_MODULE_OPTIONS",
                    useValue: options,
                },
                HealthService,
            ],
        };
    }
}
