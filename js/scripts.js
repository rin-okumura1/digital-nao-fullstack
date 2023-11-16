

function hola(c){
    const img=c.width +" x "+c.height;
    
    alert("la resolucion es "+img)
}
function validate(){

    validateEmail()
    validatePassword()
}
function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('inputEmail');
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		alert("se ha registrado")
	}else{
		alert('el mail es invalido');
		
	}
}
function validatePassword(){
                
	// Get our input reference.
	var passswordField = document.getElementById('inputPassword');
	


	// Using test we can check if the text match the pattern
	if( passswordField.value.length>1 ){
		alert("se ha registrado")
	}else{
		alert('el password es invalido se requiere que tenga almenos 8 caracteres');
		
	}
}  