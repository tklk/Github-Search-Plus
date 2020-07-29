export class AdvancedSearchUser {
    constructor(
        public user: string,
        public language?: string,
        public repos?: number,
        public followers?: number,
        public location?: string
    ) {}
}
