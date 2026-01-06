import { Module } from "@nestjs/common";
import { HealthModule } from "@shared/modules/health/health.module";
import { ProxyModule } from "./modules/proxy/proxy.module";


@Module({
    imports: [
        HealthModule.forRoot({
            serviceName: "gateway",
        }),
        ProxyModule,
    ],
})
export class AppModule {}
