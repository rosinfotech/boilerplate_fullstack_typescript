export interface IHealthModuleOptions {
    serviceName?: string;
}

export interface IHealthResponse {
    details: Record<string, unknown>;
    error: Record<string, unknown>;
    info: Record<string, unknown>;
    status: string;
}
