//grab the elements

let randomText = document.getElementById("textBox");
const goBtn = document.getElementById("go-btn");
const resultDiv = document.getElementById("parentDiv");


// create a way for the words in any random sentence to be automatically capitalized.
//const randomText = "jYfhesoKfjjsd";

let newArray = ['h','g','d','s'];


function accumulate(newArray) {
    newArray //= text
    .toLowerCase()
    .split('')
    .forEach((letter, index) => { 
               
               acc = index + 1;
               //const result = document.createElement("p");
               //const mumble = 
               letter.charAt(0).toUpperCase() + letter.repeat(acc);
               newArray.join("-");
               
            //    result.innerText = mumble;
            //    resultDiv.append(result);
        
              
        //  } else {
        //        const mumble = letter.charAt(0).toUpperCase() + letter.repeat(acc);
        //        result.innerText = mumble;
        //        resultDiv.append(result);      
    })
    
}
    //console.log(accumulate(randomText));
   
// goBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     return (accumulate(randomText.value));
// })

console.log(newArray);