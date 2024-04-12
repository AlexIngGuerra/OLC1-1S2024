
let a = "global";

function funcion(){
    let a = "funcion";
    if(true){
        let a = "if";
        while(true){
            let a = "while";
            console.log(a);
            break;
        }
        console.log(a);
    }
    console.log(a);
}

console.log(a); 

