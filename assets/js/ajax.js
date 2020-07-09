//---------------------------- Reset Button ---------------------------------

"use strict",
function PageReset(){
	window.location.reload();
}
//---------------------------- contact section ------------------------------
function ckhformcontact(){
	
	if(document.getElementById("name").value==''){
		alert("Please Enter Your Name"); 
		document.getElementById("name").value='';
		document.getElementById("name").focus();
		return false;
	}
	if(document.getElementById("email").value==''){
		alert("Please Enter Your Email"); 
		document.getElementById("email").value='';
		document.getElementById("email").focus();
		return false;
	}
	if(!validateEmail("Email Address",document.getElementById("email").value))	
	{
		document.getElementById("email").click();
		document.getElementById("email").focus();
		return false;
	}
	if(document.getElementById("subject").value==''){
		alert("Please Enter Your Subject"); 
		document.getElementById("subject").value='';
		document.getElementById("subject").focus();
		return false;
	}
	if(document.getElementById("message").value==''){
		alert("Please Enter Your Message"); 
		document.getElementById("message").value='';
		document.getElementById("message").focus();
		return false;
	}
    return true;
}

function ajaxmailcontact(){
	
	if(ckhformcontact() == true){
			
	var form_data = $('#contact_form').serialize();
	
		$.ajax({
		type: "POST",
		url:"assets/php/mailcontroller.php?mode=contact",
		data:form_data,
		cache:false,
		async:false,
		success: function(data) {
			//alert(data);
			if(data==1){
			$('#name_error').css('display','none');
			$('#email_error').css('display','none');
			$('#message_error').css('display','none');
			$('#mail_fail').css('display','none');
			$('#mail_success').css('display','block');
			//alert("Your message has been sent successfully.");	
			$('#contact_form')[0].reset();
			}else if(data==2){
			$('#email_error').css('display','none');
			$('#message_error').css('display','none');
			$('#mail_fail').css('display','none');
			$('#mail_success').css('display','none');
			$('#name_error').css('display','block');
			//alert("Sorry, error occured this time sending your message.");
			}else if(data==3){
			$('#name_error').css('display','none');
			$('#message_error').css('display','none');
			$('#mail_fail').css('display','none');
			$('#mail_success').css('display','none');
			$('#email_error').css('display','block');
			//alert("Sorry, error occured this time sending your message.");
			}else if(data==4){
			$('#name_error').css('display','none');
			$('#mail_fail').css('display','none');
			$('#mail_success').css('display','none');
			$('#email_error').css('display','none');
			$('#message_error').css('display','block');
			//alert("Sorry, error occured this time sending your message.");
			} else{
			$('#name_error').css('display','none');
			$('#message_error').css('display','none');
			$('#mail_success').css('display','none');
			$('#email_error').css('display','none');
			$('#mail_fail').css('display','block');
			//alert("Sorry, error occured this time sending your message.");
			}
		}
		});
		
	}
}



//---------------------------- subscriber section ------------------------------
function ckhformsubscribe(){
	if(document.getElementById("subsEmail").value==''){
		alert("Please Enter Your Email Address"); 
		document.getElementById("subsEmail").value='';
		document.getElementById("subsEmail").focus();
		return false;
	}
	if(!validateEmail("Email Address",document.getElementById("subsEmail").value))	
	{
		document.getElementById("subsEmail").click();
		document.getElementById("subsEmail").focus();
		return false;
	}
    return true;
}

function mailsubscribe(){
	
if(ckhformsubscribe() == true){
	//alert(2);
	var form_data=$('#subsForm').serialize();
	//alert(form_data);
		 $.ajax({
		url:"php/mailcontroller.php?mode=subscriber",
		data:form_data,
		cache:false,
		async:false,
		success: function(data) {
			//alert(data);
			if(data==1){
			$('#valid_pop').click();
			$('#subsForm')[0].reset();
			}
		}
		});
}
}