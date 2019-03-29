export class Patient {
    constructor(
      // public  _id:number,
      //  public Name:string,
      // public  Email:string,
      //  public Department:number
      public   _id:Number,
      public    PName:String,
      public     Blood_group:String,
   
      public   Connection_way:{
           Phonenumber:Number,
           Facebook:String,    
       },
       public   Age:Number,
       public    Gender:String,
       public   Location:{
          City:String,
          Street:String
      },
      public     Username:String,
      public     Password:String,
      
    ){

    }
}
