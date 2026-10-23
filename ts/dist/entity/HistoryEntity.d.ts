import { ClaudeResetsEntityBase } from '../ClaudeResetsEntityBase';
import type { ClaudeResetsSDK } from '../ClaudeResetsSDK';
import type { Control } from '../types';
import type { History, HistoryLoadMatch } from '../ClaudeResetsTypes';
declare class HistoryEntity extends ClaudeResetsEntityBase<History> {
    constructor(client: ClaudeResetsSDK, entopts: any);
    make(this: HistoryEntity): HistoryEntity;
    load(this: any, reqmatch?: HistoryLoadMatch, ctrl?: Control): Promise<HistoryEntity>;
}
export { HistoryEntity };
