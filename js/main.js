function validate() {
	var isValid = true;
	var name = document.getElementById('validateName').value;
	var email = document.getElementById('validateEmail').value;
	var password = document.getElementById('validatePassword').value;
	if(name==''){
		document.getElementById('errName').style.display='block';
    document.getElementById('errName').innerHTML='Name Required';
		isValid = false;
	}else{
    document.getElementById('errName').style.display='none';
  }
	if(email==''){
    document.getElementById('errEmail').style.display='block';
  	document.getElementById('errEmail').innerHTML='Email Required';
    isValid = false;
  }else{
    	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!filter.test(email)) {
        document.getElementById('errEmail').style.display='block';
        document.getElementById('errEmail').innerHTML="Invalid Email";
        isValid = false;
      }else{
        document.getElementById('errEmail').style.display='none';
        }
      }
		if(password==''){
			document.getElementById('errPassword').style.display='block';
			document.getElementById('errPassword').innerHTML='Password Required';
			isValid = false;
		}else{
			re = /[0-9]/;
      if(!re.test(password)) {
				document.getElementById('errPassword').style.display='block';
				document.getElementById('errPassword').innerHTML='Password must contain at least one number (0-9)!';
        isValid = false;
      }else {
				re = /[a-z]/;
	      if(!re.test(password)) {
					document.getElementById('errPassword').style.display='block';
					document.getElementById('errPassword').innerHTML='Password must contain at least one lowercase letter (a-z)!';
	        isValid = false;
	      }
			}
		}
      return isValid;
};
