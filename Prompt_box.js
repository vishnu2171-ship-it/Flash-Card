function addition()
{
   let answer = document.getElementById("inputValue").value
   if(isNaN(answer))
   {
       document.getElementById("answers").innerHTML = "Hey "+  answer +" " + "is not a number !!!"
   }
   else
   {  
        
    if(correctAnswer == answer)
    {
        document.getElementById("answers").innerHTML = `Correct!!! ${numOne} + ${numTwo} = ${correctAnswer}`
    }
    else
    {
        document.getElementById("answers").innerHTML = `In Correct!!! ${numOne} + ${numTwo} = ${correctAnswer}, not ${answer}`
    }
   }       
}

function reload()
{
    document.getElementById("answers").innerHTML = ""
    document.getElementById("inputValue").value = ""
    document.getElementById("header").innerHTML = numOne + "+" + numTwo
    numOne = Math.floor(Math.random() * 10) + 1
    numTwo = Math.floor(Math.random() * 10) + 1
    correctAnswer = numOne + numTwo 

}
