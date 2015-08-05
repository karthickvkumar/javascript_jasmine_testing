var Curr_conversion = function(code, Amnt) {
    switch (code) 
    {
        case "USD":

            var us =  Amnt * 64.10;
            return us;
            break;

        case "EUR":
            var eu =  Amnt * 71.14;
            return eu;
            break;

        case "RUB":
            var rb = Amnt * 1.13;
            return rb;
            break;

        case "MXN":
            var mx = Amnt * 4.08;
            return mx;
            break;

        case "SAR":

            var sa = Amnt * 18;
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
