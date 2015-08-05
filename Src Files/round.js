var Round_value = function (choice,value)
{
	switch(choice)
	{
		case "Ceil":
		return (Math.ceil(value));
		break;

		case "Floor":
		return (Math.floor(value));
		break;

		case undefined:
		return ("Enter Value");
		break;

		default:
		return "Don't use strings";


	}

	
}