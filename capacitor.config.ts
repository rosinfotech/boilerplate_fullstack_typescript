import type { CapacitorConfig } from "@capacitor/cli";


const isDevelopment = process.env.NODE_ENV === "development";
const port = process.env.PORT || "3000";

const config: CapacitorConfig = {
    appId: "tech.rosinfo.demo.boilerplate_fullstack_typescript",
    appName: "Rosinfotech Boilerplate Fullstack TypeScript/Mobile",
    plugins: {
        CapacitorAssets: {
            iconPath: "src/capacitor/assets/icon.svg",
            splashPath: "src/capacitor/assets/splash.svg",
        },
    },
    server: {
        androidScheme: "https",
        ...(isDevelopment && {
            cleartext: true,
            url: `http://localhost:${port}`,
        }),
    },
    webDir: ".next.mobile",
};

export default config;
