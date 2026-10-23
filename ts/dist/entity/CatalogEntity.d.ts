import { ClaudeResetsEntityBase } from '../ClaudeResetsEntityBase';
import type { ClaudeResetsSDK } from '../ClaudeResetsSDK';
import type { Control } from '../types';
import type { Catalog, CatalogLoadMatch } from '../ClaudeResetsTypes';
declare class CatalogEntity extends ClaudeResetsEntityBase<Catalog> {
    constructor(client: ClaudeResetsSDK, entopts: any);
    make(this: CatalogEntity): CatalogEntity;
    load(this: any, reqmatch?: CatalogLoadMatch, ctrl?: Control): Promise<CatalogEntity>;
}
export { CatalogEntity };
