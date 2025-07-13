let userscore=0;
 let compscore=0;
let msg= document.querySelector("#msg");
let user_score=document.querySelector("#user-score");
 let comp_score=document.querySelector("#comp-score");


 const computerchoice=()=>{
     const options=["rock","scissors","paper"];
        const randomidx= Math.floor(Math.random()*3);

     return options[randomidx];

 }
  const drawgame=()=>{
     console.log("the game is drawn");
      msg.innerText="game drawn";
       msg.style.backgroundColor="yellow";


     

  }
   const showwinner=(userwin,userchoice,compchoice)=>{
     if(userwin){
         console.log("user is the winner ");
          userscore++;
          user_score.innerText=userscore;
        msg.style.backgroundColor="green";



         msg.innerText=`you win ${userchoice} beats ${compchoice}`;


     }
      else {
         console.log("comp is the winner");
          compscore++;
           comp_score.innerText=compscore;
               msg.style.backgroundColor="red";


         msg.innerText=`you win ${compchoice} beats ${userchoice}`;



      }
   }
   const playgame=(userchoice)=>{
console.log("user choice =",userchoice);
// now generate computer choice
 const compchoice= computerchoice();
console.log("computer choice =",compchoice);
     if(userchoice===compchoice){
         drawgame();

     }
      else {
         let userwin=true;
            // means user is winning
             if(userchoice==="rock"){
                   userwin=compchoice==="scissors"?true:false;

             } else if(userchoice==="scissors"){
                 userwin=compchoice==="paper"?true:false;

             }
              else {
                 userwin=compchoice==="rock"?true:false;

              }
               showwinner(userwin,userchoice,compchoice);


             
             
      }

   }
  const choices=document.querySelectorAll(".choice");
   choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         const userchoice=choice.getAttribute("id");
         playgame(userchoice);

    });


   });
