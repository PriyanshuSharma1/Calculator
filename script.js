let equationString ="";
let resultString="";

let buttons= document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            //evaluate the equation
            resultString=eval(equationString);
            //display the equation and result
            document.getElementById("equation").value=equationString;
            document.getElementById("result").value=resultString;
            //store result for further calculations
            equationString=resultString;
        }
        else if(e.target.innerHTML== "AC"){
            equationString="";
            resultString="";
            document.getElementById("equation").value=equationString;
            document.getElementById("result").value=resultString;

        }
        else{
            equationString=equationString+e.target.innerHTML;
            document.getElementById("equation").value=equationString;
        }
        // Change the button color and add an effect when clicked
        e.target.style.backgroundColor = "blue";
        e.target.style.color="white";  // Change to any desired color
        setTimeout(() => {
            e.target.style.backgroundColor = "";
            e.target.style.color="";   // Reset the color after a delay
        }, 200);
        
    })
})