import { Module } from "@nestjs/common";

import { PresentationController } from "./presentation/presentation.controller";


@Module({
    controllers: [PresentationController],
})
export class PresentationModule {}
