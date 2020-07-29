export class AdvancedSearchRepo {
    constructor(
        public repository: string,
        public language?: string,
        public user?: string,
        public size?: number,
        public stars?: number,
        public topic?: string,
    ) {}
}
