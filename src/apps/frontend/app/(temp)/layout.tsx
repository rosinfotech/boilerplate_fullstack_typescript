import "../globals.css";
import type { PropsWithChildren } from "react";
import { LayoutContent } from "@/layouts/LayoutContent";


const TempLayout = (props: Readonly<PropsWithChildren>) => {
    const { children } = props;

    return (
        <LayoutContent>{children}</LayoutContent>
    );
};

export default TempLayout;
