const TAB_SPACES = 4;

export const logEnvVariables = () => {
    console.log();
    console.log("src/apps/frontend/capacitor.config.ts");
    console.log();
    console.log(
        JSON.stringify(
            Object.fromEntries(
                Object.entries(process.env).filter(
                    ([k]) =>
                        k.startsWith("NEXT") ||
                        k.startsWith("NODE") ||
                        k.startsWith("PORT") ||
                        k.startsWith("HOST")
                )
            ),
            undefined,
            TAB_SPACES
        )
    );
    console.log();
};
