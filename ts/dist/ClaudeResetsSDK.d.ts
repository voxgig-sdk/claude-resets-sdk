import { CatalogEntity } from './entity/CatalogEntity';
import { HistoryEntity } from './entity/HistoryEntity';
import { SummaryEntity } from './entity/SummaryEntity';
export type * from './ClaudeResetsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ClaudeResetsEntityBase } from './ClaudeResetsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class ClaudeResetsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Catalog(entopts?: Record<string, any>): CatalogEntity;
    History(entopts?: Record<string, any>): HistoryEntity;
    Summary(entopts?: Record<string, any>): SummaryEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ClaudeResetsSDK;
    tester(testopts?: any, sdkopts?: any): ClaudeResetsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ClaudeResetsSDK;
export { stdutil, config, BaseFeature, ClaudeResetsEntityBase, ClaudeResetsSDK, SDK, };
export type { DirectResult };
