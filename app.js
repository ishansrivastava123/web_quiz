const questions = [
    {
        "que": "Which of the following is a markup language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "que": "What is the correct HTML for creating a hyperlink?",
        "a": "<a> http://www.google.com",
        "b": "<a url = 'http://www.google.com'> Google.com",
        "c": "<a href = 'http://www.google.com'> Google",
        "d": "<a src = 'http://www.google.com'> Google",
        "correct": "c"
    },
    {
        "que": "What is the first tag we put on the top of a basic HTML page?",
        "a": "<index>",
        "b": "<html>",
        "c": "<head>",
        "d": "<body>",
        "correct": "b"
    },
    {
        "que": "As of August 2010, which was the most popular web browser used to access the internet?",
        "a": "Internet Explorer",
        "b": "Google Chrome",
        "c": "Safari",
        "d": "Firefox",
        "correct": "d"
    },
    {
        "que": "How can you open a link in a new browser window?",
        "a": "<a href = 'url' target = 'blank' >",
        "b": "<a href = 'url' target = '_blank'>",
        "c": "<a href = 'url' target = 'new'>",
        "d": "<a href = 'url' target = '_new'>",
        "correct": "b"
    },
    {
        "que": "What is the correct HTML for inserting an image?",
        "a": "<img href = 'image.gif' />",
        "b": "<image src = 'image.gif' />",
        "c": "<img src = 'image.gif' />",
        "d": "<image href = 'image.gif' />",
        "correct": "c"
    },
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const queBox = document.getElementById("queBox");
const options = document.querySelectorAll(".options");

const questionLoad = () => {
    console.log("Question Loading: " + index);
    if(index == total) {
        console.log("Reached here!");
        return endQuiz();
    } else {
        const quesNo = questions[index];
        reset();
        queBox.innerHTML = `${index+1}. ${quesNo.que}`;
        options[0].nextElementSibling.innerText = quesNo.a;
        options[1].nextElementSibling.innerText = quesNo.b;
        options[2].nextElementSibling.innerText = quesNo.c;
        options[3].nextElementSibling.innerText = quesNo.d;
    }
}

const submitQuiz = () => {
    let length = 0;
    options.forEach(
        (input) => {
            if(input.checked) {
                length++;
            }
        }
    )
    
    if(length == 0) {
        document.querySelector(".error").style.display = "block";
    } else {
        const quesNo = questions[index];
        let ans = getAnswer();
        if(ans == quesNo.correct) {
            right++;
        } else {
            wrong++;
        }
        index++;
        questionLoad();
        return;
    }
}

const getAnswer = () => {
    let answer;
    console.log("Getting selected option: " + index);
    options.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer
}

const reset = () => {
    options.forEach(
    (input) => {
        input.checked = false;
    })
    document.querySelector(".error").style.display = "none";
}

const endQuiz = () => {
    console.log("Quiz ended!");
    document.querySelector("#box1").innerHTML = `
    <div class="endQuiz">
        <h1>Thank you for playing the Quiz. Hope you enjoyed!</h1>
        <h2>${right} / ${total} are <span style="color:green;">correct!</span></h2>
    </div>`
}

questionLoad();