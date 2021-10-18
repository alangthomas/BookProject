
export class Book {
    constructor(
        public id ? : number,
        public catId ?: number,
        public title? : string,
        public ISBN ? : number,
        public year? : number,
        public price ? : number,
        public description ? : string,
        public position? : number,
        public status? : number,
        public image? : string,
        public author ? : string 
    ){ }
}