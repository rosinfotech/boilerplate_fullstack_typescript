"use client";

import type { SafeAreaInsets } from "@rosinfo.tech/capacitor-plugin-safe-area";
import { SafeArea } from "@rosinfo.tech/capacitor-plugin-safe-area";


export const safeAreaInit = async () => {
    const setSafeAreaInsetsProperties = (insets: SafeAreaInsets["insets"]) => {
        if (typeof document === "undefined") return;

        for (const [key, value] of Object.entries(insets)) {
            document.documentElement.style.setProperty(`--safe-area-inset-${key}`, `${value}px`);
        }
    };

    SafeArea.getSafeAreaInsets().then(({ insets }) => {
        setSafeAreaInsetsProperties(insets);
    });

    SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
        if (typeof document === "undefined") return;

        document.documentElement.style.setProperty(`--status-bar-height`, `${statusBarHeight}px`);
    });

    await SafeArea.removeAllListeners();

    await SafeArea.addListener("safeAreaChanged", data => {
        const { insets } = data;
        setSafeAreaInsetsProperties(insets);
    });
};
