function addition()
{
    let userAnswer = document.getElementById("value").value 
    if(isNaN(userAnswer))
    {
        document.getElementById("output").innerHTML = `Hey '${userAnswer}' is not a number`
    }
    else
    {
        if(correct_answer == userAnswer)
        {
            document.getElementById("output").innerHTML = `Correct: ${number1} + ${number2} = ${correct_answer}`
        }
        else
        {
            document.getElementById("output").innerHTML = `In Correct: ${number1} + ${number2} = ${correct_answer}, not ${userAnswer}`
            if(userAnswer == "")
            {
                document.getElementById("output").innerHTML = `Cannot Be Blank`
            }
        }
    }
}

function reload()
{
    document.getElementById("value").value = ""
    document.getElementById("output").innerHTML = ""
    number1 = Math.floor(Math.random() * 20) + 1
    number2 = Math.floor(Math.random() * 20) + 1
    correct_answer = number1 + number2
    document.getElementById("header").innerHTML = `${number1} + ${number2}`
}