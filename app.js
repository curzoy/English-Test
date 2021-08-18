const questions = [
    {
        question: "How many days makes a week ?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },

    {
        question: "what is your job?",
        optionA: "IT Director",
        optionB: "Free",
        optionC: "Hungry",
        optionD: "Basket Ball",
        correctOption: "optionA"
    },

    {
        question: "her name is...",
        optionA: "Car",
        optionB: "Dish Washer",
        optionC: "Land",
        optionD: "Lana",
        correctOption: "optionD"
    },

    {
        question: "How Many Days is A Month?",
        optionA: "19",
        optionB: "12",
        optionC: "30",
        optionD: "10",
        correctOption: "optionC"
    },

    {
        question: "How manay hours can be found in a day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "What is Your Nationality?",
        optionA: "Iraqi",
        optionB: "Kurdistan",
        optionC: "Portugal",
        optionD: "James",
        correctOption: "optionA"
    }

]


let shuffledQuestions = []

function handleQuestions() { 
    while (shuffledQuestions.length <= 5) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let Score = 0  
let wrongAttempt = 0 
let indexNumber = 0

function NextQuestion(index) {
    RadioButtonsState(false)
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("line").value = questionNumber;
    document.getElementById("line").max = questions.length;
    document.getElementById("question-number").innerHTML = questionNumber+"/"+questions.length;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("select-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("select-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("select-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("select-four-label").innerHTML = currentQuestion.optionD;
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("select"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
   


    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            document.getElementById(correctOption).style.borderColor = "green"
            Score++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(wrongLabelId).style.borderColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            document.getElementById(correctOption).style.borderColor = "green"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    RadioButtonsState(true)
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 5) {
            NextQuestion(indexNumber)
        }
        else {
            Result()
        }
        resetOptionBackground()
    }, 1000);
}
function RadioButtonsState(state) {
    const options = document.getElementsByName("select");
    for (let i = 0; i < options.length; i++) {
        options[i].disabled= state;
    }
}

function resetOptionBackground() {
    const options = document.getElementsByName("select");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
        document.getElementById(option.labels[0].id).style.borderColor  = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("select");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function Result(){
    document.getElementById('main').style.display = "none";
    document.getElementById('result').style.display = "block";
    var text;
    var total = Score/questions.length;

    if(total >= 0.25 && total < 0.5)
        text = "Don't Lose Hope, Keep Trying.";
    else if (total >= 0.50 && total < 0.75)
    text = "Nice Keep On Going, That Was Great!"
    else if (total >= 0.75 && total < 1)
    text = "You Are a Natural!";
    else
    text = "Well Looks Like Someone is Having Fun.";

    document.getElementById('pharse').innerHTML = text;
    document.getElementById('score').innerHTML = "Overall Score : "+Score;
    ProgressBar(total*100);

}


function ProgressBar(value) {
    var can = document.getElementById('canvas'),
        spanProcent = document.getElementById('procent'),
         c = can.getContext('2d');
   
    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * value;
    
    c.lineCap = 'round';
    arcMove();
    
    function arcMove(){
      var deegres = 0;
      var acrInterval = setInterval (function() {
        deegres += 1;
        c.clearRect( 0, 0, can.width, can.height );
        procent = deegres / oneProcent;
  
        spanProcent.innerHTML = procent.toFixed();
  
        c.beginPath();
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        c.strokeStyle = '#b1b1b1';
        c.lineWidth = '10';
        c.stroke();
  
        c.beginPath();
        c.strokeStyle = '#3949AB';
        c.lineWidth = '10';
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
        c.stroke();
        if( deegres >= result ) clearInterval(acrInterval);
      }, fps);
      
    }
    
    
  }