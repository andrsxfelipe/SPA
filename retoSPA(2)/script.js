const JSON_URL = "http://localhost:3000/users";

async function bringContent(url){
    let content;
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(response.status)
        }
        const data = await response.text()
        content = data
    }
    catch (error) {
        content = `<h2>Not Found</h2>
        ${error}`
    }
    document.getElementById("content").innerHTML = content;
}

async function bringData(inputEmail, inputPass) {
    let userData;
    try{
        const response = await fetch(JSON_URL);
        if(!response.ok){
            throw new Error(response.status)
        }
        const data = await response.json();
        userData = data.find( email => email.email == inputEmail)
        if(!userData || inputPass != userData.password){
            throw new Error("Usuario no encontrado")
        }
        return (userData)
        //mostrar(JSON.stringify(userData)); //Cambiar a lo que quiera hacer con el dato del usuario
    } catch (error){
        console.log("hubo un error");
        return(false)
    }
}

function mostrar(x){
    console.log(`EL resultado es: ${x}`)
}

async function main(){
    if(!localStorage.getItem('Auth')){
        await bringContent("./pages/login.html");
        singIn()
    }
    else{

    }
}

function singIn(){
    document.getElementById("signin-form").addEventListener('submit', async function(event){
        event.preventDefault();
        const inputEmail = this.querySelector("#login-email").value;
        const inputPass = this.querySelector("#login-password").value;
        console.log(inputEmail);
        console.log(inputPass);
        await bringData(inputEmail,inputPass);

    })
}

main()