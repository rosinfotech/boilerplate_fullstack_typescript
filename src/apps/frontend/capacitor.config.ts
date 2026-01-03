import type { CapacitorConfig } from "@capacitor/cli";
import { logEnvVariables } from "../../../.scripts/log-env-variables.ts";


const isDevelopment = process.env.NODE_ENV === "development";
const isAndroid = process.env.NEXT_PUBLIC_PLATFORM_MOBILE === "android";
const port = process.env.PORT || "38501";

logEnvVariables();

const config: CapacitorConfig = {
    appId: "tech.rosinfo.demo.boilerplate_fullstack_typescript",
    appName: "Rosinfotech Boilerplate Fullstack TypeScript/Mobile",
    plugins: {
        CapacitorAssets: {
            iconPath: "capacitor/assets/icon.svg",
            splashPath: "capacitor/assets/splash.svg",
        },
    },
    server: {
        androidScheme: "https",
        ...(isDevelopment && {
            cleartext: true,
            url: isAndroid ? `http://10.0.2.2:${port}` : `http://localhost:${port}`,
        }),
    },
    webDir: ".build.mobile",
};

export default config;
