//grab the elements

// const randomText = document.getElementById("textBox");
//  const goBtn = document.getElementById("go-btn");
const resultDiv = document.getElementById("parentDiv");


// create a way for the words in any random sentence to be automatically capitalized.
const randomText = "jYfhesoKfjjsd";

let newArray = [];


function accumulate(text) {
    newArray = text
    .toLowerCase()
    .split('')
    .forEach((letter, index) => { 
        n = 0;
        while (n < newArray.length - 1) {       
               acc = index + 1;
               const result = document.createElement("p");
               const mumble = letter.charAt(0).toUpperCase() + letter.repeat(acc)+ "-";
               result.innerText = mumble;
               resultDiv.append(result);
        }
              
        //  } else {
        //        const mumble = letter.charAt(0).toUpperCase() + letter.repeat(acc);
        //        result.innerText = mumble;
        //        resultDiv.append(result);      
    })
    
}
    console.log(accumulate(randomText));
    
    

    //console.log(accumulate(randomText));


    //     resultDiv = document.getElementById("parentDiv");
    //     resultDiv.innerHTML="";
    //          for (let i = 0; i < newArray.length; i++) {
    //              const aWord = document.createElement('div')
    //              aWord.textContent = newArray[i] + " ";
    //              resultDiv.append(aWord)
    //      }})      

    // }

// goBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     return (accumulate(randomText.value));
// })

