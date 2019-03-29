export class Donor {
    constructor(
        public Name:String,
        public _id:Number,
      public Age:Number,
      public Gender:String,
      public BloodGroup:String,
      public Contact:{phone:Number,facebook:String},
      public Address:{city:String,street:Number},
      public LastDonation:Date
        

    ){}
}
