import { ClaudeResetsEntityBase } from '../ClaudeResetsEntityBase';
import type { ClaudeResetsSDK } from '../ClaudeResetsSDK';
import type { Control } from '../types';
import type { Summary, SummaryListMatch } from '../ClaudeResetsTypes';
declare class SummaryEntity extends ClaudeResetsEntityBase<Summary> {
    constructor(client: ClaudeResetsSDK, entopts: any);
    make(this: SummaryEntity): SummaryEntity;
    list(this: any, reqmatch?: SummaryListMatch, ctrl?: Control): Promise<SummaryEntity[]>;
}
export { SummaryEntity };
