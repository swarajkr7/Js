//While Loop


let i=0;

while(i<5){
    console.log('Mai loop ke andar se bol raha hu sirf paanch baar hi bolunga');
    i++;
}

//For Loop


for (let j=0; j<5; j++){
    console.log('Bhai ye jya ye to for loop hai');
}

//Random number vala While Loop

let Random=0;

  while(Random<0.5){
    Random=Math.random();
    console.log(Random);
  }


  //Loop through Array

  const num=[10,20,30,40,50];

  for (let k=0; k<num.length; k++){
    console.log(num[k]);
  }


  const animals=['cat' ,'dog', 'elephant', 'tiger'];

    for(let m=0; m<animals.length; m++){
        console.log(animals[m]);
    }


 const number=[1,2,3,4];

 let newNumber =[];
 
 
 for (let n=0; n<number.length; n++){
    newNumber.push(number[n]*3);
    console.log(newNumber[n]);

 }