import { Module } from "@nestjs/common";

import { HealthModule } from "@shared/modules/health/health.module";


@Module({
    imports: [
        HealthModule.forRoot({
            serviceName: "service-2",
        }),
    ],
})
export class AppModule {}
