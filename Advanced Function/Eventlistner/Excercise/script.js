            const score=JSON.parse(localStorage.getItem('score')) || {  
                    Wins:0,                                             
                    Losses:0,                               
                    Ties:0                              
                };

            displayResult();
                
            document.querySelector('.reset-button').addEventListener('click',()=>{
                reset();
            })
            document.body.addEventListener('keydown',(event)=>{
                if(event.key=' '){
                    reset();
                }
            })

            let html='';
            
            function reset(){
                let html=`
                <div>
                <p>
                Are you sure you want to reset the score?
                <button class="yes">Yes</button>
                <button class="No">No</button>
                </p>
                </div>
                `;
                 document.querySelector('.yesNo').innerHTML=html;

                (document.querySelector)('.yes').addEventListener('click',()=>{
                    html=``;
                    document.querySelector('.yesNo').innerHTML=html;
                    score.Wins=0;
                    score.Losses=0;
                    score.Ties=0;
                    localStorage.removeItem('score');
                    displayResult();

                })
                document.querySelector('.No').addEventListener('click',()=>{
                    html=``;
                    document.querySelector('.yesNo').innerHTML=html;
                    return ;
                });
            }

            let isAutoPlay=false;
            let intervalId=0;

            document.querySelector('.auto-play-button').addEventListener('click',()=>{
                autoPlay();
            })

            document.body.addEventListener('keydown',(event)=>{
                if(event.key==='a'){
                    autoPlay();
                }
            })
           
            function autoPlay(){
                if (!isAutoPlay){
                        intervalId=setInterval(()=>{
                        const playerMove=randomNumber();
                        playGame(playerMove);
                        document.querySelector('.auto-play-button').innerText="Stop Playing";
                    },500);
                    isAutoPlay=true;
                }else
                    {
                        document.querySelector('.auto-play-button').innerText="Auto Play";
                    clearInterval(intervalId);
                    isAutoPlay=false;
                }
            }

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

                function displayResult(result="",playerMove=" ",computerMove=""){

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