/*1. Using for loops, write a Javascript program to output the following
pattern -*/

function jsPattern(){
    let no_of_column=5;
    let no_of_rows=5;
    let emptyString="";
    let count=1;
    for (let i=1;i<=4;i++){
        // console.log("\n")
        for (let j=1;j<=i;j++){
            emptyString+=count;
            count++;
        }
        emptyString+="\n";
    }
    console.log(emptyString);
}
jsPattern()
/*2.Write a program to find whether a given number is armstrong number or
not*/
let number12;
function armStrongid(number12){
    let my_string=number12.toString();
    let my_array=my_string.split('');
        console.log(my_array)
    let summaztion=0;
    for(let index in my_array){
    let my_array_cude=(my_array[index]*my_array[index]*my_array[index]);
    // let my_array_cude_digits=(Math.pow((my_array[index]),3));
    summaztion=summaztion+my_array_cude
    };
    let sum_of_array=my_array[0]+my_array[1]+my_array[2];
    if (summaztion==sum_of_array){
        console.log(" This is an Armstrong number")
    }
    else{
        console.log("Try next number")
    }
}
armStrongid(370)
/*Write a program to find whether a given number is special number or
not*/
let number13;
function specialNumber(number13){
    let my_string=number13.toString();
    let my_array=my_string.split('');
    for (let i=0;i<my_array.length;i+=1){
        if (my_array[i] == 0 || my_array[i] == 1){
        console.log(1);
        };
        for (let j=my_array[i]-1;j>=1;j--){
            my_array[i]*=j;
            // console.log(my_array[i]);
        let sNum=0;
        sNum+=my_array[i];
        console.log(sNum);
          }
        }
    }
specialNumber(145);
