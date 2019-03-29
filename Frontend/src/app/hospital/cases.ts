export class Cases {
    constructor(
        public _id:Number , 
        public  Name:String,
        public  Needed:Number,
        public  Department:String,
        public Location:{
            city:String,
            street:String
        }
        // public city:string,
        // public street:string,
    ){}
    
}
// private city:string,
// private street:string,