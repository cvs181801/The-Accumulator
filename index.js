//grab the elements

let randomText = document.getElementById("textBox");
const goBtn = document.getElementById("go-btn");
const resultDiv = document.getElementById("parentDiv");
const result = document.createElement("p");

// create a way for the words in any random sentence to be automatically capitalized.
//const randomText = "jYfhesoKfjjsd";

let newArray = [];


function accumulate(text) {
    newArray = text
    .toLowerCase()
    .split('')
    .forEach((letter, index) => {    
               result.innerText = "";
               acc = index + 1;
               const mumble = letter.charAt(0).toUpperCase() + letter.repeat(acc);
               newArray.push(mumble);
               result.innerText = newArray.join("-");
               resultDiv.append(result);
            })
              
        }
   
goBtn.addEventListener('click', function(e) {
    e.preventDefault();
    return (accumulate(randomText.value));
})

