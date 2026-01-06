import type { OnModuleInit } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Controller, Get } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";


@Controller("api")
export class ProxyController implements OnModuleInit {
    private service1Client: ClientProxy;
    private service2Client: ClientProxy;
    private service3Client: ClientProxy;

    constructor(private readonly httpService: HttpService) {
        const params = {
            service1Host: process.env.SERVICE_HOST_SERVICE_1,
            service1TcpPort: process.env.SERVICE_PORT_TCP_SERVICE_1,
            service2Host: process.env.SERVICE_HOST_SERVICE_2,
            service2TcpPort: process.env.SERVICE_PORT_TCP_SERVICE_2,
            service3Host: process.env.SERVICE_HOST_SERVICE_3,
            service3TcpPort: process.env.SERVICE_PORT_TCP_SERVICE_3,
        };

        if (
            !params.service1Host ||
            !params.service1TcpPort ||
            !params.service2Host ||
            !params.service2TcpPort ||
            !params.service3Host ||
            !params.service3TcpPort
        ) {
            throw new Error(
                "All SERVICE_HOST_* and SERVICE_PORT_TCP_* environment variables are required"
            );
        }

        this.service1Client = ClientProxyFactory.create({
            options: {
                host: params.service1Host,
                port: parseInt(params.service1TcpPort),
            },
            transport: Transport.TCP,
        });

        this.service2Client = ClientProxyFactory.create({
            options: {
                host: params.service2Host,
                port: parseInt(params.service2TcpPort),
            },
            transport: Transport.TCP,
        });

        this.service3Client = ClientProxyFactory.create({
            options: {
                host: params.service3Host,
                port: parseInt(params.service3TcpPort),
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

    @Get("service-1/health/live")
    async getService1HealthLive() {
        const params = {
            service1Host: process.env.SERVICE_HOST_SERVICE_1,
            service1HttpPort: process.env.SERVICE_PORT_HTTP_SERVICE_1,
        };
        const response = await firstValueFrom(
            this.httpService.get(
                `http://${params.service1Host}:${params.service1HttpPort}/health/live`
            )
        );

        return response.data;
    }

    @Get("service-1/health/ready")
    async getService1HealthReady() {
        const params = {
            service1Host: process.env.SERVICE_HOST_SERVICE_1,
            service1HttpPort: process.env.SERVICE_PORT_HTTP_SERVICE_1,
        };
        const response = await firstValueFrom(
            this.httpService.get(
                `http://${params.service1Host}:${params.service1HttpPort}/health/ready`
            )
        );

        return response.data;
    }

    @Get("service-2/health/live")
    async getService2HealthLive() {
        const params = {
            service2Host: process.env.SERVICE_HOST_SERVICE_2,
            service2HttpPort: process.env.SERVICE_PORT_HTTP_SERVICE_2,
        };
        const response = await firstValueFrom(
            this.httpService.get(
                `http://${params.service2Host}:${params.service2HttpPort}/health/live`
            )
        );

        return response.data;
    }

    @Get("service-2/health/ready")
    async getService2HealthReady() {
        const params = {
            service2Host: process.env.SERVICE_HOST_SERVICE_2,
            service2HttpPort: process.env.SERVICE_PORT_HTTP_SERVICE_2,
        };
        const response = await firstValueFrom(
            this.httpService.get(
                `http://${params.service2Host}:${params.service2HttpPort}/health/ready`
            )
        );

        return response.data;
    }

    @Get("service-3/health/live")
    async getService3HealthLive() {
        const params = {
            service3Host: process.env.SERVICE_HOST_SERVICE_3,
            service3HttpPort: process.env.SERVICE_PORT_HTTP_SERVICE_3,
        };
        const response = await firstValueFrom(
            this.httpService.get(
                `http://${params.service3Host}:${params.service3HttpPort}/health/live`
            )
        );

        return response.data;
    }

    @Get("service-3/health/ready")
    async getService3HealthReady() {
        const params = {
            service3Host: process.env.SERVICE_HOST_SERVICE_3,
            service3HttpPort: process.env.SERVICE_PORT_HTTP_SERVICE_3,
        };
        const response = await firstValueFrom(
            this.httpService.get(
                `http://${params.service3Host}:${params.service3HttpPort}/health/ready`
            )
        );

        return response.data;
    }
}
