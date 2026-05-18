const inp1=document.getElementById("inp1")
const inp2=document.getElementById("inp2")
const inp3=document.getElementById("inp3")
const  res=document.getElementById("res")

res.onclick=function(){
    let first=inp1.value;
    let sec=inp2.value;
    let third=inp3.value;
    let res1=first.charAt(0).toUpperCase()+first.slice(1)
    
    let res2=sec.charAt(0).toUpperCase()+sec.slice(1)
    
    let email=inp3.value;
    if(email.includes("@") && email.includes(".")){
        message=email}
        else{
            message="Invalid"
        }
        
         output.textContent =
        `Name1: ${res1}
         Name2: ${res2}
         ${message}`;
    }

    

