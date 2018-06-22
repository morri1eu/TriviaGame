$(document).ready(function () {
    $(".question").hide()
    $(".end").hide()
    $(".Start").bind("click", startQuiz)
    var intervalId;
    var correct = 0
    var incorrect = 0
    var array = [1, 2, 3]
    var count = 10
    var emptyArray = []
    var i;
    var timeOut;
    var timeOutIncorrect;
    function buttonClick() {

        $("button").bind("click", function () {
            console.log(this)
            if ($(this).attr("class") == "correctAnswer") {
                correct++
                console.log(correct)
                nextQuestion()
                
            }
            else {
                incorrect++
                nextQuestion()
                console.log(incorrect)
                
            }

        })
    }

    function countdown() {
        clearInterval(intervalId)
        count = 10
        intervalId = setInterval(function () {
            count--
            $(".timer").text(count)
        }, 1000)
     

    }

    function nextQuestion() {
        console.log("nextQuestion")
        clearTimeout(timeOut)
        countdown()
        $("button").unbind("click")
        buttonClick()
        console.log("between click and choice")
        questionChoice()
        timeOut= setTimeout(nextQuestion, 10000)
    

    }


    function questionChoice() {
        console.log(i)
        $(`[id=${i}]`).hide()

        i = Math.floor(Math.random() * 5) + 1
        console.log(i)
        console.log("questionChoice")
        console.log(emptyArray.indexOf(i))
        if (emptyArray.indexOf(i) < 0) {
            $(`[id=${i}]`).show()
            emptyArray.push(i)
            console.log(i)
            console.log(emptyArray)
            countdown()
            return
        }
        else if (emptyArray.indexOf(1) >= 0 && emptyArray.indexOf(2) >= 0 && emptyArray.indexOf(3) >= 0) {
            console.log("array is full")
            $(".end").show()
            $(".correct").text(correct)
            $(".incorrect").text(incorrect)
        }

        else {
            questionChoice()
            console.log("else")
        }
        

    }





    function startQuiz() {
        $(".startPage").hide()
        $(".Start").unbind("click")
        nextQuestion()

    }


})