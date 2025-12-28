import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


const bootstrap = async () => {
    const params = {
        app: await NestFactory.create(AppModule),
        port: process.env.PORT || 38502,
    };

    params.app.enableCors({
        credentials: true,
        origin: process.env.CORS_ORIGIN || "http://localhost:38501",
    });

    await params.app.listen(params.port);

    console.log(`Backend is running on: http://localhost:${params.port}`);
};

bootstrap();
