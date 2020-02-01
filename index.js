// Code your solutions in this file

function writeCards(array, event){
    let arrayz = []
    for (let i=0; i < array.length; i++) { 
       
        let x = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;  
        
        arrayz.push(x) 
        
    } 
    return arrayz
} 

function countDown(num) {

    while (num >= 0) {
        console.log(num);
        --num
    }

}  

