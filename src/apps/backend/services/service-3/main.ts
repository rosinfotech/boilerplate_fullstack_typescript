import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";

import { AppModule } from "./app.module";


const bootstrap = async () => {
    const params = {
        port: process.env.SERVICE_PORT_SERVICE_3,
    };

    if (!params.port) {
        throw new Error("SERVICE_PORT_SERVICE_3 environment variable is required");
    }

    const app = await NestFactory.createMicroservice(AppModule, {
        options: {
            host: "0.0.0.0",
            port: parseInt(params.port),
        },
        transport: Transport.TCP,
    });

    await app.listen();

    console.log(`Service-3 microservice is running on: tcp://localhost:${params.port}`);
};

bootstrap();
