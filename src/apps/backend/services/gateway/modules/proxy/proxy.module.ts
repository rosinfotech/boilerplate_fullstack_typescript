import { Module } from "@nestjs/common";

import { ProxyController } from "./presentation/proxy.controller";


@Module({
    controllers: [ProxyController],
})
export class ProxyModule {}
