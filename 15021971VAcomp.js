let button = document.getElementById("comSend");
let user = document.querySelector("#comUser");
let pass = document.querySelector("#comPass");

button.addEventListener("click", (e) => {   
        e.preventDefault()
        let userInfo = user.value;
        let passInfo = pass.value;    
        if (userInfo === "viviAmigo" && passInfo === "1234")
        {
            console.log("accedio");
            window.open("WritingZone.html");
        } else {
            console.log(" no accedio");
            document.write("USUARIO Y/O CONTRASEÑA INCORRECTOS");
        }        
});