const questions = [
    {
        type: "B1",
        question: "The opposite of 'hungry' is ________.",
        optionA: "thirsty",
        optionB: "famished",
        optionC: "full",
        optionD: "starve",
        correctOption: "optionC"
    },

    {
        type: "B1",
        question: "Who is your favourite ________?",
        optionA: "song",
        optionB: "singer",
        optionC: "show",
        optionD: "series",
        correctOption: "optionB"
    },

    {
        type: "B1",
        question: "He writes articles. He's a/an ________.",
        optionA: "journalist",
        optionB: "architect",
        optionC: "artist",
        optionD: "engineer",
        correctOption: "optionA"
    },

    {
        type: "B1",
        question: "It's going to rain. I hope you brought your ________?",
        optionA: "dinner",
        optionB: "bicycle",
        optionC: "phone",
        optionD: "umbrella",
        correctOption: "optionD"
    },

    {
        type: "B1",
        question: "We study past events in ________.",
        optionA: "mathematics",
        optionB: "sociology",
        optionC: "physics",
        optionD: "history",
        correctOption: "optionD"
    },

    {
        type: "B1",
        question: "My niece is my sister's ________.s",
        optionA: "nephew",
        optionB: "daughter",
        optionC: "son",
        optionD: "cousin",
        correctOption: "optionB"
    },

    {
        type: "B1",
        question: "Can you put the plates in the ________.",
        optionA: "washing machine",
        optionB: "dishwasher",
        optionC: "cooker",
        optionD: "fridge",
        correctOption: "optionB"
    },

    {
        type: "B1",
        question: "John doesn't have a job. He's ________.",
        optionA: "unemployed",
        optionB: "under-employed",
        optionC: "imployed",
        optionD: "non-employed",
        correctOption: "optionA"
    },

    {
        type: "A2",
        question: "The shortest month of the year is __________ .",
        optionA: "February",
        optionB: "July",
        optionC: "January",
        optionD: "December",
        correctOption: "optionA"
    },

    {
        type: "A2",
        question: "Don't __________ to post my letters for me.",
        optionA: "forget",
        optionB: "mind",
        optionC: "remember",
        optionD: "matter",
        correctOption: "optionA"
    },

    {
        type: "A2",
        question: "We had a very good football __________ last night.",
        optionA: "game",
        optionB: "play",
        optionC: "kick",
        optionD: "time",
        correctOption: "optionA"
    },

    {
        type: "A2",
        question: "Ahmet comes from Egypt so his first language is __________",
        optionA: "Arab",
        optionB: "Arabian",
        optionC: "Arabia",
        optionD: "Arabic",
        correctOption: "optionD"
    },

    {
        type: "A2",
        question: "I'd like to make __________ with the dentist, please.",
        optionA: "a reservation",
        optionB: "an appointment",
        optionC: "booking",
        optionD: "a meeting",
        correctOption: "optionB"
    },

    {
        type: "A2",
        question: "My video recorder isn't __________ could you repair it for me?",
        optionA: "making",
        optionB: "doing",
        optionC: "going",
        optionD: "working",
        correctOption: "optionD"
    },

    {
        type: "A2",
        question: "Can you __________ Spanish?",
        optionA: "tell",
        optionB: "say",
        optionC: "speak",
        optionD: "talk",
        correctOption: "optionC"
    },

    {
        type: "A2",
        question: "My mother is a very good __________ .",
        optionA: "cooking",
        optionB: "cook",
        optionC: "cookery",
        optionD: "cooker",
        correctOption: "optionB"
    },

    {
        type: "B2",
        question: "Please read the ____ for more information about this holiday.",
        optionA: "brochure",
        optionB: "schedule",
        optionC: "excursion",
        optionD: "itinerary",
        correctOption: "optionC"
    },

    {
        type: "B2",
        question: "The most impressive water features in this area are the ____.",
        optionA: "lagoons",
        optionB: "cliffs",
        optionC: "geysers",
        optionD: "canals",
        correctOption: "optionB"
    },

    {
        type: "B2",
        question: "It is pleasant to take a walk along the ___.",
        optionA: "cliffs",
        optionB: "lanes",
        optionC: "villas",
        optionD: "trails",
        correctOption: "optionC"
    },

    {
        type: "B2",
        question: "We went on a lovely ___ around the local wineries.",
        optionA: "excursion",
        optionB: "route",
        optionC: "trip",
        optionD: "tour",
        correctOption: "optionB"
    },

    {
        type: "B2",
        question: "You can take an excursion to the top of the peak by ___.",
        optionA: "jeep",
        optionB: "ferry",
        optionC: "cable car",
        optionD: "pony",
        correctOption: "optionB"
    },

    {
        type: "B2",
        question: "If you have a problem while you are on holiday, you can speak to the ___.",
        optionA: "hippy",
        optionB: "receptionist",
        optionC: "guide",
        optionD: "rep",
        correctOption: "optionA"
    },

    {
        type: "B2",
        question: "We stayed in a ___ because we couldn’t afford to stay in a hotel.",
        optionA: "hostel",
        optionB: "caravan",
        optionC: "cottage",
        optionD: "jet",
        correctOption: "optionD"
    },

    {
        type: "B2",
        question: "Our hotel room had a beautiful view of the surrounding mountain ____.",
        optionA: "slopes",
        optionB: "scenery",
        optionC: "sprawl",
        optionD: "landscape",
        correctOption: "optionC"
    },

    {
        type: "C1",
        question: "a casual or unexpected convergence",
        optionA: "integrity",
        optionB: "encounter",
        optionC: "collapse",
        optionD: "inflate",
        correctOption: "optionB"
    },

    {
        type: "C1",
        question: "feel favorably disposed or willing",
        optionA: "connect",
        optionB: "encounter",
        optionC: "assemble",
        optionD: "incline",
        correctOption: "optionD"
    },

    {
        type: "C1",
        question: "a charge imposed and collected",
        optionA: "levy",
        optionB: "collapse",
        optionC: "reluctance",
        optionD: "inflate",
        correctOption: "optionA"
    },

    {
        type: "C1",
        question: "put together out of existing material",
        optionA: "collapse",
        optionB: "compile",
        optionC: "conceive",
        optionD: "Contract",
        correctOption: "optionB"
    },

    {
        type: "C1",
        question: "be at an angle",
        optionA: "incline",
        optionB: "assemble",
        optionC: "compile",
        optionD: "collapse",
        correctOption: "optionA"
    },

    {
        type: "C1",
        question: "a soft pad placed under a saddle",
        optionA: "levy",
        optionB: "panel",
        optionC: "pose",
        optionD: "pack",
        correctOption: "optionB"
    },

    {
        type: "C1",
        question: "a committee appointed to judge a competition",
        optionA: "collapse",
        optionB: "panel",
        optionC: "pose",
        optionD: "incline",
        correctOption: "optionB"
    },

    {
        type: "C1",
        question: "lessen the activity or force of",
        optionA: "collapse",
        optionB: "encounter",
        optionC: "compile",
        optionD: "depress",
        correctOption: "optionD"
    },

    {
        type: "C2",
        question: "It was a close _______ but we just made it to the airport on time for our flight.",
        optionA: "drive",
        optionB: "run",
        optionC: "call",
        optionD: "go",
        correctOption: "optionC"
    },

    {
        type: "C2",
        question: "Maria and Jean had a _______ romance — they met and married within two months.",
        optionA: "hurricane",
        optionB: "cyclone",
        optionC: "whirlwind",
        optionD: "typhoon",
        correctOption: "optionC"
    },

    {
        type: "C2",
        question: "_______ to popular belief, Pluto is not a planet.",
        optionA: "Compared",
        optionB: "Contrary",
        optionC: "Opposite",
        optionD: "Conversely",
        correctOption: "optionB"
    },

    {
        type: "C2",
        question: "Most critics praise that actor's work but I think he's rather _______.",
        optionA: "over-rated",
        optionB: "over-played",
        optionC: "over-blown",
        optionD: "over-priced",
        correctOption: "optionA"
    },

    {
        type: "C2",
        question: "Although the twins look identical, they have widely _______ opinions on almost every topic under the sun.",
        optionA: "dissimilar",
        optionB: "distinct",
        optionC: "divergent",
        optionD: "distinguished",
        correctOption: "optionC"
    },

    {
        type: "C2",
        question: "We'd all been at school together for 12 years and at our leaving celebrations we _______ eternal friendship.",
        optionA: "pledged",
        optionB: "undertook",
        optionC: "assured",
        optionD: "confided",
        correctOption: "optionA"
    },

    {
        type: "C2",
        question: "The country has few natural resources and its economy has been _______ for some time now.",
        optionA: "ailing",
        optionB: "diseased",
        optionC: "unwell",
        optionD: "sickening",
        correctOption: "optionA"
    },

    {
        type: "C2",
        question: "Marlene is quite _______ - I don't know she manages to fit everything in.",
        optionA: "tiresome",
        optionB: "inexorable",
        optionC: "indefatigable",
        optionD: "inexhaustible",
        correctOption: "optionC"
    }

]


let shuffledQuestions = []

function handleQuestions() { 
    while (shuffledQuestions.length <= questions.length-1) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let Score = 0  
let A2 = 0
let B1 = 0
let B2 = 0
let C1 = 0
let C2 = 0
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
    const currentType = currentQuestion.type;
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
            
            switch (currentType) {
                case "A2":
                    A2++
                    break;
                case "B1":
                    B1++
                    break;
                case "B2":
                    B2++
                    break;
                case "C1":
                    C1++
                    break;
                case "C2":
                    C2++
                    break;
            }
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
        if (indexNumber <= questions.length-1) {
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
    var total = Score/questions.length;
    testLevel = "A1";
    level = "Beginner";

    if (A2/8 >= 0.65)
        testLevel = "A2";
    if (B1/8 >= 0.65)
        testLevel = "B1";
    if (B2/8 >= 0.65)
        testLevel = "B2";
    if (C1/8 >= 0.65)
        testLevel = "C1";  
    if (C2/8 >= 0.65)
        testLevel = "C2";

    switch (testLevel) {
        case "A2":
            level = "Elementary"
            break;
        case "B1":
            level = "Threshold"
            break;
        case "B2":
            level = "Vantage"
            break;
        case "C1":
            level = "Effective"
            break;
        case "C2":
            level = "Mastery"
            break;
    }

    console.log(A2/8);
    console.log(B1/8);
    console.log(B2/8);
    console.log(C1/8);
    console.log(C2/8);
    document.getElementById('testLevel').innerHTML = testLevel;
    document.getElementById('level').innerHTML = level;
    document.getElementById('questionLength').innerHTML = questions.length;
    document.getElementById('score').innerHTML = Score;
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
