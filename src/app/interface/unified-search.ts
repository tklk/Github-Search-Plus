import { GitSearchRepo } from './git-search-repo';
import { GitSearchCode } from './git-search-code';

export interface UnifiedSearch {
    repositories: GitSearchRepo,
    code: GitSearchCode
}
