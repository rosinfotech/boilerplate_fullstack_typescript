const TAB_SPACES = 4;

export const logEnvVariables = (label: string) => {
    console.log();
    console.log(label);
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
