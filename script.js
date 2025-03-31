let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let copyDiv=document.querySelector(".copyCode");

let rgb1="rgba(93,76,152,70)";
let rgb2="rgba(152,63,198)";
const hexValue=()=>{
    let myHexValues="0123456789abcdef";
    let colors="#";
    for(let i=0;i<6;i++){
        colors=colors+myHexValues[Math.floor(Math.random()*16)];
    }
    return colors;

}

const handleButton1=()=>{
    rgb1= hexValue();
    console.log(rgb1);
    btn1.innerText=rgb1;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML=`background-image: linear-gradient(to right, ${rgb1} , ${rgb2})`;
};
const handleButton2=()=>{
    rgb2=hexValue();
    console.log(rgb2);
    btn2.innerText=rgb2;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb2},${rgb1})`;
    copyDiv.innerHTML=`background-image: linear-gradient(to right, ${rgb1} , ${rgb2})`;
}

btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);

copyDiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
});