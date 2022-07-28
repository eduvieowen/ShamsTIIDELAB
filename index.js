// ShamsTIIDELAB

let count = 1;
let result = document.getElementById("result"); // targets ID in HTML

for(let index = 1; index <= 200; index++){
    
    if(count%6 == 0 && count%8 !== 0){
        result.innerHTML += `<p>Shams</p>`;
        console.log(`Shams`); // for numbers divisible by 6
    }
    else if(count%8 == 0 && count%6 !== 0){
        result.innerHTML += `<p>TTIDELAB</p>`;
        console.log(`TIIDELAB`); // for numbers divisible by 8 & not by 6
    }
    else if(count%8 == 0 && count%6 == 0){
        result.innerHTML += `<p>ShamsTIIDELAB</p>`;
        console.log(`ShamsTIIDELAB`); // for numbers divisible by 8 & 6
    }
    else{
        result.innerHTML += `<p>${count}</p>`;
        console.log(`${count}`); // logs out number from 1-200
    }
    count++; // increments by 1
}