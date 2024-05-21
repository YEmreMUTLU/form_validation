const btn=document.querySelector('#btn')

btn.onclick=()=>{
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    if(name.length>=1 && email.includes("@")){
     alert("Hoşgeldiniz")
      
    }else{alert("hatalı giriş")}
}