            const score=JSON.parse(localStorage.getItem('score')) || {  
                    Wins:0,                                             
                    Losses:0,                               
                    Ties:0                              
                };

            displayResult();

            function reset(){
                score.Wins=0;
                score.Losses=0;
                score.Ties=0;
                localStorage.removeItem('score');
                displayResult();
            }

            let isAutoPlay=false;
            let intervalId=0;

            function autoPlay(){
                if (!isAutoPlay){
                        intervalId=setInterval(()=>{
                        const playerMove=randomNumber();
                        playGame(playerMove);
                    },500);
                    isAutoPlay=true;
                }else
                    {
                    clearInterval(intervalId);
                    isAutoPlay=false;
                }
            }


            document.querySelector('.js-rock-button').addEventListener('click',()=>{//IN eventlistner we give
                                                //function not run it.
                playGame('rock');
            })

            document.querySelector('.js-paper-button').addEventListener('click',()=>{
                playGame('paper')
            })

            document.querySelector('.js-scissors-button').addEventListener('click',()=>{
                playGame('scissors');
            })


            document.body.addEventListener('keydown',(event)=>{
                if(event.key===('r'||'R')){
                    playGame('rock');
                }else if(event.key===('p'||'P')){
                    playGame('paper');
                }else if(event.key===('s'||'S')){
                    playGame('scissors');
                }
            })

            function playGame(playerMove){

                let result=" ";

                const computerMove = randomNumber();

                if (computerMove===playerMove){
                    score.Ties+=1;
                    displayResult(result="Tie",playerMove,computerMove);
                    

                }else{
                    if(computerMove==="rock"){
                        if(computerMove==="rock" && playerMove==="paper"){
                            score.Wins+=1;
                        displayResult(result="Win",playerMove,computerMove);
                        

                        }else{
                             score.Losses+=1;
                            displayResult(result="Loss",playerMove,computerMove);
                           
                        }  
                    }
                    
                    
                    if(computerMove==="paper"){
                        if(computerMove==="paper" && playerMove==="scissors"){
                            score.Wins+=1;
                        displayResult(result="Win",playerMove,computerMove);
                        

                        }else{
                            score.Losses+=1;
                        displayResult(result="Loss",playerMove,computerMove);

                        }
                    }
                    
                    if(computerMove==="scissors"){
                        if(computerMove==="scissors" && playerMove==="rock"){
                            score.Wins+=1;
                        displayResult(result="Win",playerMove,computerMove);
                        

                        }else{
                            score.Losses+=1;
                        displayResult(result="Loss",playerMove,computerMove);
                        
                        }
                    }
                    
                }
                localStorage.setItem('score',JSON.stringify(score));
            }

                function displayResult(result="",playerMove="",computerMove=""){

                    if(result===''){
                        document.querySelector('.score').innerText=`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`;
                    }else{
                         document.querySelector('.result').innerText=`You ${result}!`;
                        document.querySelector('.move').innerHTML=
                        `You
                        <img  class="move-icon" src="/Images/${playerMove}-emoji.png">
                        <img class="move-icon" src="/Images/${computerMove}-emoji.png">
                        Computer`;
                        document.querySelector('.score').innerText=`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`;

                    }

//                     console.log(`Your picked: ${playerMove}. Computer picked: ${computerMove} Result: ${result}
// Wins:${score.Wins}, Loss:${score.Losses}, Tie:${score.Ties}`);

                }
        

                function randomNumber(){
                    const choice=Math.random();

                    let computerMove='';

                    if(choice>=0 && choice <1/3){
                        computerMove='rock';

                    }else if(choice>=1/3 && choice <2/3){
                        computerMove='paper';

                    }else{
                        computerMove='scissors'; 

                    }

                    return computerMove;
                }