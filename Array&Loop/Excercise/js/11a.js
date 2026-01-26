const NUM=[10,20,30];

NUM[2]=99;

console.log(NUM[2]);


const array=[10,20,29,30];


const arr=['hi','hello','good'];


function getLastValue(array){
    return array[array.length-1];
}

console.log(getLastValue(arr));


//Swap Elements

function swapElements(array){
    let temp=0;

    temp=array[0];
    array[0]=array[array.length-1]
    array[array.length-1]=temp;

    return array;
}

console.log(swapElements(arr));


//For Loop
let j=0;
for(let j=0; j<=10; j+=2){
    console.log(j);
}

while(j<=10){
    console.log(j)
    j+=2;
}

// Counts in backward Loop

for(let c=5; c>=0; c--){
    console.log(c);
}

let c=0;

while(c>=0){
    console.log(c);
    c--;
}

// Loop to add +1 to the elements of the array

let integer=[1,2,3];

for(let a=0; a<integer.length; a++){
    integer[a]++;
}
console.log(integer);

// Function to add +1 to the elements of the array

function addByOne(arr){
    for(let a=0; a<arr.length; a++){
    arr[a]++;
   }

   return arr;

}

console.log(addByOne(integer));

//Function to add num to the elements of the Array

function addNum(arr,num){
    for(let y=0; y<arr.length-1; y++){
        arr[y]+=num;
    }
    return arr;
}

console.log(addNum(integer,2));

let s=[2,3]
//Function to add the two array

function addTwoArray(arr1,arr2){

    let array=[];
    let l=0;
    let b=0;
    let a=0;

    if(arr1.length>arr2.length){
         l=arr1.length;
         b=arr2.length;
         a=arr1;
        
    }else{
        l=arr2.length;
        b=arr1.length;
        a=arr2;
    }

    for(let i=0; i<l; i++){
        if(i<b){
            array.push(arr1[i]+arr2[i]);
            console.log(arr1[i]+arr2[i]);
        }else{
            array.push(a[i]);
            console.log(a[i]);
        }
    }

    return array;

}

const q=[1,2,3,4,5];
console.log("summation of two array");
console.log(addTwoArray(q,s));



//Create Count Positive Function

const nums=[3];

function countPositive(arr){
    
    let count=0;

    for(let f=0; f<arr.length-1; f++){
        (arr[f]>0)?count++:count;
    }

    return count;
}

console.log(countPositive(nums));


function minMax(arr){

    if(arr.length===0){
        return  `min: null max: null `;
    }else{

         let c=arr[0];
    let d=arr[0];
    let index1=0;
    let index2=0;
    let min=0;
    let max=0;
    
    for(let q=1; q<arr.length-1; q++){
        if(arr[q]>c){
            c=arr[q];
            index1=q;
        }

        if(d>arr[q]){
            d=arr[q];
            index2=q;
        }
    }
    min=nums[index2];
    max=nums[index1];

    return `min: ${min} max:${max} `;

    }

   
}

console.log(minMax(nums))


// Create Functiion count word

const fruits=['apple','apple', 'banana', 'orange', 'orange', 'kiwi', 'kiwi'];



function countWords(fruits){

    const object={};

    for(let i=0; i<fruits.length-1; i++){
        let count=0;

        for(let j=0; j<fruits.length-1; j++){

            if(fruits[i]===fruits[j]){
                count++;
                
            }
        }
        const prop=fruits[i];
        object[prop]=count;//[] helps to set ddynamic property names in which the value of prop is assigned as property name
    }

    return object;
}

console.log(countWords(fruits));