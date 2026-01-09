import "./globals.css";
import type { PropsWithChildren } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { metadata as appMetadata } from "./metadata/constants";


export const metadata = appMetadata;

const HTMLLayout = (props: Readonly<PropsWithChildren>) => {
    const { children } = props;

    return (
        <html lang="ru">
            <head>
                <link href="/fonts/mont/index.css" rel="stylesheet" />
            </head>
            <body>
                <AntdRegistry>
                    {children}
                </AntdRegistry>
            </body>
        </html>
    );
};

export default HTMLLayout;
