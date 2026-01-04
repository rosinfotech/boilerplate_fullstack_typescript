import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";


const bootstrap = async () => {
    const params = {
        app: await NestFactory.create(AppModule),
        port: process.env.SERVICE_PORT_GATEWAY,
    };

    if (!params.port) {
        throw new Error("SERVICE_PORT_GATEWAY environment variable is required");
    }

    params.app.enableCors({
        credentials: true,
        origin: process.env.CORS_ORIGIN,
    });

    await params.app.listen(params.port);

    console.log(`Gateway is running on: http://localhost:${params.port}`);
};

bootstrap();
