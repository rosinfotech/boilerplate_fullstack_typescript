import { Module } from "@nestjs/common";

import { PresentationModule } from "./modules/presentation.module";


@Module({
    imports: [PresentationModule],
})
export class AppModule {}
