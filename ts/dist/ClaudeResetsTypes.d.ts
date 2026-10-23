export interface Catalog {
    meta?: Record<string, any>;
    providers: Record<string, any>;
}
export interface CatalogLoadMatch {
    meta?: Record<string, any>;
    providers?: Record<string, any>;
}
export interface History {
    claude: Record<string, any>;
    codex: Record<string, any>;
}
export interface HistoryLoadMatch {
    claude?: Record<string, any>;
    codex?: Record<string, any>;
}
export interface Summary {
    date: string;
    id: string;
    scope?: string;
    url?: string;
    usableUntil?: string;
}
export interface SummaryListMatch {
    date?: string;
    id?: string;
    scope?: string;
    url?: string;
    usableUntil?: string;
}
