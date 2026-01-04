import type { OnModuleInit } from "@nestjs/common";

import type { ClientProxy } from "@nestjs/microservices";
import { Controller, Get } from "@nestjs/common";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";


@Controller("api")
export class ProxyController implements OnModuleInit {
    private service1Client: ClientProxy;
    private service2Client: ClientProxy;
    private service3Client: ClientProxy;

    constructor() {
        const params = {
            service1Host: process.env.SERVICE_HOST_SERVICE_1,
            service1Port: process.env.SERVICE_PORT_SERVICE_1,
            service2Host: process.env.SERVICE_HOST_SERVICE_2,
            service2Port: process.env.SERVICE_PORT_SERVICE_2,
            service3Host: process.env.SERVICE_HOST_SERVICE_3,
            service3Port: process.env.SERVICE_PORT_SERVICE_3,
        };

        if (
            !params.service1Host ||
            !params.service1Port ||
            !params.service2Host ||
            !params.service2Port ||
            !params.service3Host ||
            !params.service3Port
        ) {
            throw new Error(
                "All SERVICE_HOST_* and SERVICE_PORT_* environment variables are required"
            );
        }

        this.service1Client = ClientProxyFactory.create({
            options: {
                host: params.service1Host,
                port: parseInt(params.service1Port),
            },
            transport: Transport.TCP,
        });

        this.service2Client = ClientProxyFactory.create({
            options: {
                host: params.service2Host,
                port: parseInt(params.service2Port),
            },
            transport: Transport.TCP,
        });

        this.service3Client = ClientProxyFactory.create({
            options: {
                host: params.service3Host,
                port: parseInt(params.service3Port),
            },
            transport: Transport.TCP,
        });
    }

    async onModuleInit() {
        await this.service1Client.connect();
        await this.service2Client.connect();
        await this.service3Client.connect();
    }

    @Get("service-1")
    async getService1() {
        const params = await this.service1Client.send({ cmd: "check" }, {}).toPromise();

        return params;
    }

    @Get("service-2")
    async getService2() {
        const params = await this.service2Client.send({ cmd: "check" }, {}).toPromise();

        return params;
    }

    @Get("service-3")
    async getService3() {
        const params = await this.service3Client.send({ cmd: "check" }, {}).toPromise();

        return params;
    }
}
