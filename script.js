function validateEmail(){
		var emailInput = document.getElementById("email").value;
		var alertElement = document.getElementById("alert");
  
		emailInput=emailInput.trim();

	if
	(
		emailInput.length=== 0 ||
		emailInput.indexOf("@") === -1 ||
		emailInput.indexOf(".") === -1
	)
	{
		alertElement.innerText="Invalid, please try again. ";
		alertElement.style.display="block";
		
	} 
	
	else	
		{
		
		alertElement.innerText = "Success!";
		alertElement.style.display="block";
		
		}
		
		
	}


