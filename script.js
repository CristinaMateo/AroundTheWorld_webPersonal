document.getElementById("contactForm").addEventListener("submit", function(event){
    
       event.preventDefault();
       
       const fname = event.target.fname.value 
       const lname = event.target.lname.value
       const email = event.target.email.value 
       const accept =event.target.accept.checked 
       const spam =event.target.spam.checked 
 
   let alerta ="";
   
   
       if(fname.length <3|| fname.length > 30){
           alerta+="El nombre debe tener entre 3 y 30 caracteres.\n";
           document.getElementById("fname").style.borderColor= "red";
       }
       if(lname.length <3|| lname.length > 30){
        alerta+="El apellido debe tener entre 3 y 30 caracteres.\n";
        document.getElementById("lname").style.borderColor= "red";
       }
   
       if((!email.endsWith(".com") && !email.endsWith(".es")) || !email.includes("@")){
        alerta+= "Introduce una dirección de correo válida.\n";
        document.getElementById("email").style.borderColor= "red";
       }
   
   
       if(!spam || !accept){
        alerta+="Acepta los términos legales y el envío de publicidad.\n";
        document.getElementById("check").style.color= "red";
        document.getElementById("publi").style.color= "red"
       }

       if(alerta.length != 0){
           alert(alerta); 
   
            let aviso = document.createElement("span");
            let mensaje= document.createTextNode("Verifica que todos los campos estén rellenados correctamente y no olvides aceptar los términos legales y el envío de publicidad para poder hacerte llegar nuestra newsletter.");
            aviso.style.color="#DD1C1A";
            aviso.style.fontSize = "1em"
            aviso.appendChild(mensaje);
            document.getElementById("contact").appendChild(aviso);

       }
   
   })