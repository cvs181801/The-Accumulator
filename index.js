//grab the elements

// const randomText = document.getElementById("textBox");
//  const goBtn = document.getElementById("go-btn");
  let resultDiv = document.getElementById("parentDiv");
 const result = document.createElement("p");

// create a way for the words in any random sentence to be automatically capitalized.


let newArray = [];


function accumulate(text) {
    newArray = text
    .toLowerCase()
    .split('')
    .forEach((letter, index) => { 
             acc = index + 1;
             if (index > 0) { 
               const mumble = "-" + letter.charAt(0).toUpperCase() + letter.repeat(acc);
               result.innerText = mumble;
               parentDiv.append(result);
              
         } else {
               const mumble = letter.charAt(0).toUpperCase() + letter.repeat(acc);
               result.innerText = mumble;
               parentDiv.append(result);
             
         }
         
    })
    
}
    console.log(accumulate(randomText));
    
    randomText = "jYfhesoKfjjsd";

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

