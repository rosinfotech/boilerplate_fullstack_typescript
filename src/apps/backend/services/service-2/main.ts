import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";

import { AppModule } from "./app.module";


const bootstrap = async () => {
    const params = {
        port: process.env.SERVICE_PORT_SERVICE_2,
    };

    if (!params.port) {
        throw new Error("SERVICE_PORT_SERVICE_2 environment variable is required");
    }

    const app = await NestFactory.createMicroservice(AppModule, {
        options: {
            host: "0.0.0.0",
            port: parseInt(params.port),
        },
        transport: Transport.TCP,
    });

    await app.listen();

    console.log(`Service-2 microservice is running on: tcp://localhost:${params.port}`);
};

bootstrap();
