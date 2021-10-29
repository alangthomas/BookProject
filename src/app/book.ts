
export class Book {
    constructor(
        public Id ? : number,
        public CatId ?: number,
        public Title? : string,
        public ISBN ? : number,
        public Year? : number,
        public Price ? : number,
        public Description ? : string,
        public Position? : number,
        public Status? : number,
        public Image? : string,
        public Author ? : string 
    ){ }
}