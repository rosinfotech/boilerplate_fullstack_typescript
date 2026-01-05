import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";

import { AppModule } from "./app.module";


const bootstrap = async () => {
    const params = {
        httpPort: process.env.SERVICE_PORT_HTTP_SERVICE_3,
        tcpPort: process.env.SERVICE_PORT_TCP_SERVICE_3,
    };

    if (!params.httpPort || !params.tcpPort) {
        throw new Error(
            "SERVICE_PORT_HTTP_SERVICE_3 and SERVICE_PORT_TCP_SERVICE_3 environment variables are required"
        );
    }

    const app = await NestFactory.create(AppModule);

    app.connectMicroservice({
        options: {
            host: "0.0.0.0",
            port: parseInt(params.tcpPort),
        },
        transport: Transport.TCP,
    });

    await app.startAllMicroservices();
    await app.listen(parseInt(params.httpPort), "0.0.0.0");

    console.log(`Service-3 HTTP server is running on: http://localhost:${params.httpPort}`);
    console.log(`Service-3 TCP microservice is running on: tcp://localhost:${params.tcpPort}`);
};

bootstrap();
