// let inp=document.querySelector("input");
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value;
   
    
//     let btns=document.createElement("button");
//     btns.innerText="delete";
//     btns.classList.add("delete");
//     item.appendChild(btns);
//     ul.appendChild(item);
//     inp.value="";
// })

// ul.addEventListener("click",function(event){
//     //console.log(event.target.nodeName);
//     if(event.target.nodeName=="BUTTON"){
//         let listItem=event.target.parentElement;
//      //   console.log(listItem);
//      listItem.remove();


//     }    
// })

// let delBtns=document.querySelectorAll(".delete");
// console.dir(delBtns);
// for(Btn of delBtns){
//     Btn.addEventListener("click",function(){
//         let pare=Btn.parentElement;
//         pare.remove();

//     })
// }


//SIMON  SAYS GAME

let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["blue","yellow","green","purple"];
let allBtns=document.querySelectorAll(".btn");
function btnPress(){
    let btn=this;
    buttonflash(btn);
}
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
// Step 1 : start the game
document.addEventListener("keypress",function(){
     if(started==false){
        console.log("game started!");
        started=true;
        levelUp();
     }
})
//Step 2 : flash random box and level up 
function buttonflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function levelUp(){
    level++;
    h2.innerText=`level:${level}`;
    let rndInx=Math.floor(Math.random()*3);
    let randcol=btns[rndInx];
    let randBtn=document.querySelector(`.${randcol}`);
    buttonflash(randBtn);
}

