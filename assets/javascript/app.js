// Have a title that says click here to start
$(document).ready(function () {
    var showQuestion;
    var questionsAnswers = [{
        q: "Who holds the record for most homeruns in a season?",
        a: "Barry bonds",
        b: "Sammy Sosa",
        c: "Mark McGuire",
        d: "Joe Namath"
    },
    {
        q: "What shortstop holds the major league records for games played, assists and double plays?",
        a: "Ozzie Smith",
        b: "Cal Ripken Jr.",
        c: "Derek Jeter",
        d: "Joe Montana"
    },
    {
        q: "Which two cities have the oldest stadiums in major league baseball?",
        a: "Boston and Chicago",
        b: "Detroit and Atlanta",
        c: "Cincinnati and Miami",
        d: "Indianapolis and Oklahoma City"
    },
    {
        q: "What major league baseball team did the Walt Disney Company assume operational control of in 1996?",
        a: "The California Angels",
        b: "Cleveland Indians",
        c: "Arizona Diamondbacks",
        d: "Orlando Magic"
    }]
    var array = [0, 1, 2, 3]
    var intervalId;
    var count = 10
    var correct = 0
    var incorrect = 0
    var arrayCounter = 0
    var c = count
    $(".start").bind("click", startQuiz)

    function nextQuestion() {
        //if (arrayCounter === 4) run end of game 

        count = 10
        counting()
        arrayCounter++
        $(".question").html("<p>" + questionsAnswers[arrayCounter].q + "</p>")
        $(".answer1").html("<p>" + questionsAnswers[arrayCounter].a + "</p>")
        $(".answer2").html("<p>" + questionsAnswers[arrayCounter].b + "</p>")
        $(".answer3").html("<p>" + questionsAnswers[arrayCounter].c + "</p>")
        $(".answer4").html("<p>" + questionsAnswers[arrayCounter].d + "</p>")
        console.log(count)
        $(".answer").on("click", function buttonClick() {
            console.log(this)
            console.log(count)

            if ($(".answer").bind("click")) {
                console.log($(this).attr("class"))
                if ($(this).attr("class") == "answer1 answer") {
                    correct++
                }
                else {
                    incorrect++
                }

                nextQuestion()
                console.log(correct)
                $(".answer").unbind("click")
                return
            }



            nextQuestion()
            console.log(correct)
            console.log(incorrect)
            $(".answer").unbind("click")
            return
        })

    }












    function startQuiz() {
        $(".start").unbind("click")
        count = 10
        $(".question").html("<p>" + questionsAnswers[arrayCounter].q + "</p>")
        //showQuestion = setInterval(nextQuestion, 10000)
        $(".start").hide()
        counting()
        $(".answer1").html("<p>" + questionsAnswers[arrayCounter].a + "</p>")
        $(".answer2").html("<p>" + questionsAnswers[arrayCounter].b + "</p>")
        $(".answer3").html("<p>" + questionsAnswers[arrayCounter].c + "</p>")
        $(".answer4").html("<p>" + questionsAnswers[arrayCounter].d + "</p>")
        console.log(count)
        $(".answer").bind("click", function buttonClick() {
            console.log(this)
            console.log(count)
            while (count > 0) {
                if ($(".answer").bind("click")) {
                    console.log($(this).attr("class"))
                    if ($(this).attr("class") == "answer1 answer") {
                        correct++
                        nextQuestion()
                        console.log(correct)
                        $(".answer").unbind("click")
                        return
                    }
                    else {
                        incorrect++
                        nextQuestion()
                        console.log(correct)
                        $(".answer").unbind("click")
                        return
                    }
                }
            }




            // nextQuestion()
            // console.log(correct)
            // console.log(incorrect)
            // $(".answer").unbind("click")
            // return
        })
        console.log(c)

        if (count <= 0) {
            console.log(c)
            nextQuestion()
            console.log(correct)
            $(".answer").unbind("click")
        }
    }


    function counting() {
        clearInterval(intervalId)
        intervalId = setInterval(function counterDisplay() {
            $("#display").text(count)
            console.log(count)
            count--
        }, 1000)
    }



})