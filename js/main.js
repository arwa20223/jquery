/* sidebar */

 $(document).ready(function() {
    $(".sidebar-toggle").click(function() {
        $(".container").toggleClass("open-sidebar");
    });

    $(".slidebar ul li a").click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});












/* details */




$(document).ready(function(){
    function showTime(){
        var date = new Date();
        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        var session = "AM";

        if(hours == 0){
            hours = 12;
        }
    
        if(hours >= 12){
            session = "PM";
        }
    
        if(hours > 12){
            hours = hours - 12;
        }

        hours = hours < 10 ? "0" + hours : hours;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
     
        $("#hours").text(hours);
        $("#min").text(min);
        $("#sec").text(sec);
        $("#period").text(session);

        setTimeout(showTime, 1000);
    }
    showTime();
});










/* contact */






var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


/* name */



function validateName() {
   var name = document.getElementById('contact-name').value;
   
   if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
   }
   if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = 'Write full name';
    return false;
   }
   nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
   return true;
}



/* phone */


function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
 
    if(phone.length == 0){
        phoneError.innerHTML = 'phone is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone on should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits please.';
        return false;
       }
      phoneError.innerHTML =  '<i class="fas fa-check-circle"></i>';
      return true;
}
    

/* email */


function validateEmail(){
    var email = document.getElementById('contact-email').value;
 
    if(email.length == 0){
        emailError.innerHTML = 'email is required';
        /* return false; */
    }

    if (!email.match(/^[A-Za-z]\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'email Invaild';
/*         return false;
 */       }
      emailError.innerHTML =  '<i class="fas fa-check-circle"></i>';
      return true;
}


/* message */

function validateMessage(){
    var message = document.getElementById('contact-message').value;
     var required =100;
     var left = required - message.length;
     if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
     }
     messageError.innerHTML =  '<i class="fas fa-check-circle"></i>';
      return true;
}




  
/* submit */


/*    
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validatemessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
  }
} */























































