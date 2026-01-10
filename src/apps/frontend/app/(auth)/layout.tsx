import "../globals.css";
import type { PropsWithChildren } from "react";
import { LayoutCenter } from "@/layouts/LayoutCenter";


const AuthLayout = (props: Readonly<PropsWithChildren>) => {
    const { children } = props;

    return <LayoutCenter>{children}</LayoutCenter>;
};

export default AuthLayout;
