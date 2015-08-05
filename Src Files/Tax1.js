var Total_tax = {
	tax: 0,
	slab1: function(income) {

                   if((income >= 250001) && (income <= 500000))
                   {
                    var s1 = ((income-250000) *0.1);
                    return(s1);
                   }
                   else
                   {
                    var s2 = 250000 * 0.1;
                    var s3 = s2+ ((income-500000)*0.2);
                    return(s3);
                   }


    	},
  slab2: function(income) {

                   if((income >= 300000) && (income <= 500000))
                   {
                    var s1 = ((income-200000) *0.1);
                    return(s1);
                   }
                   else 
                   {
                    var s2 = 200000 * 0.1;
                    var s3 = s2+ ((income-500000)*0.2);
                    return(s3);
                   }
                   

      },
    slab3: function(income) {

                   if((income >= 500000) && (income <= 1000000))
                   {
                    var s1 = ((income-500000) *0.1);
                    return(s1);
                   }
                   else 
                   {
                    var s2 = 500000 * 0.1;
                    var s3 = s2+ ((income-1000000)*0.2);
                    return(s3);
                   }
                   

      },
 calculate: function(catgry,income) {
       
        switch (catgry)
         {
            
            case "GEN":
                      if(income <= 250000)
                      {
                        return(this.tax);

                      }
                      else
                      {
                       var a = this.slab1(income);
                        return (a+(a*0.03));
                       }                      
            			    break;
			case "SENIOR":
                      if(income <= 300000)
                      {
                        return(this.tax);

                      }
                      else
                      {
                       var a = this.slab2(income);
                        return (a+(a*0.03));
                       }                      
                      break;
   case "SUPERSENIOR":
                      if(income <= 500000)
                      {
                        return(this.tax);

                      }
                      else
                      {
                       var a = this.slab3(income);
                        return (a+(a*0.03));
                       }                      
                      break;
                      
             
            case undefined:
                			return "Enter Correct Value";
                			break;

            default:
                return "Enter the Correct Category";


        }
    }

};
