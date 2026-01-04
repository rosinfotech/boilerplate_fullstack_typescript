import { Module } from "@nestjs/common";

import { ProxyModule } from "./modules/proxy/proxy.module";


@Module({
    imports: [ProxyModule],
})
export class AppModule {}
