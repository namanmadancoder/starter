
document.addEventListener('DOMContentLoaded',function(event){  //html site open
  console.log("error")
   

    
    var dataText = [ "Hello, how are you ?", "Welcome to StartSmart.", "We provide with quality education.", "Join our course  and  make your dreams come true"];
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("#kathan").innerHTML = text.substring(0, i+1) +'<span class="jstry" aria-hidden="true"></span>';

        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }

      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }

     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }

      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
   
    
  const myform = document.getElementById("myForm");
   myform.addEventListener("submit" , (e) => {
            e.preventDefault()
            let fname = document.querySelector("#fname").value
            let lname = document.querySelector("#lname").value
            alert("values submitted." + " " +fname + lname)
   })

})
