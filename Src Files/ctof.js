var ctof = function(c)
{
		if( typeof c =="string")
		{
			return "string"
		}
		else if(typeof c == "undefined")
		{
			return "NaN"
		}
		else
		{
			return f = (c * (9/5)) + 32;
		}
}



