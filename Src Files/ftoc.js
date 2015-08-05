var ftoc = function(f)
{
		if( typeof f =="string")
		{
			return "string"
		}
		else if(typeof f == "undefined")
		{
			return "NaN"
		}
		else
		{
			return c = ( f - 32) * (5/9);
		}
}



