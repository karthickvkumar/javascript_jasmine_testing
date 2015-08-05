var conversion = function(code,Amnt) {
    switch (code) 
    {
        case "INR":

            var ir =  Amnt * 0.016;
            return ir;
            break;

        case "EUR":
            var eu =  Amnt * 1.11;
            return eu;
            break;

        case "RUB":
            var rb = Amnt * 62.56;
            return rb;
            break;

        case "MXN":
            var mx = Amnt * 17.46;
            return mx;
            break;

        case "SAR":

            var sa = Amnt * 4.17;
            return sa;
            break;

        default:
            return "Correct Currency code";


    }
}

















/*Curr_conversion("CNY",Amnt).toBeCalculable(Amnt * 10.31));
Curr_conversion("JPY",Amnt).toBeCalculable(Amnt * 0.51));
Curr_conversion("MYR",Amnt).toBeCalculable(Amnt * 17.16));
Curr_conversion("RUB",Amnt).toBeCalculable(Amnt * 1.15));
Curr_conversion("SGD",Amnt).toBeCalculable(Amt * 47.42)); */
