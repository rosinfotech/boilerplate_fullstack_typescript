import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ProxyController } from "./proxy.controller";


@Module({
    controllers: [ProxyController],
    imports: [HttpModule],
})
export class ProxyModule {}
