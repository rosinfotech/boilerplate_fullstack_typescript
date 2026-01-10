"use client";

import type { FC, PropsWithChildren } from "react";
import { ConfigProvider, Flex, Layout } from "antd";
import { antDesignThemeDark } from "@/layouts/constants/theme-dark";
import { antDesignThemeLight } from "@/layouts/constants/theme-light";
import { useHydrateStore, useResolvedTheme } from "@/lib/hooks";


const { Content } = Layout;

export const LayoutCenter: FC<PropsWithChildren> = props => {
    const { children } = props;

    useHydrateStore();

    const resolvedTheme = useResolvedTheme();

    return (
        <ConfigProvider theme={resolvedTheme === "dark" ? antDesignThemeDark : antDesignThemeLight}>
            <Layout className="w-full h-full">
                <Content className="w-full h-full">
                    <Flex align="center" className="w-full h-full" justify="center" vertical>
                        {children}
                    </Flex>
                </Content>
            </Layout>
        </ConfigProvider>
    );
};
