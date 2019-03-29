export class Hospital {
    constructor(
        public _id:number,
        public Name:String,
        public Password:Number,
        public Email:String,
        public Location:{
            city:String,
            street:String,
        },
        public Department:String,
       
        
    ){
      
    }
}
