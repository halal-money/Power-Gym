"use strict";

function showNextQuestion(nextQuestionClass, currentQuestionIndex) {
    let currentQuestion = document.querySelector(nextQuestionClass);
    if (currentQuestion) {
        currentQuestion.style.display = "none";
    }

    let nextQuestionIndex = currentQuestionIndex + 1;
    let nextQuestion = document.querySelector(`.q${nextQuestionIndex}`);
    if (nextQuestion) {
        nextQuestion.style.display = "block";
        checkButtonsVisibility(nextQuestionIndex);
    }
}

function showPrevQuestion(prevQuestionClass, currentQuestionIndex) {
    let currentQuestion = document.querySelector(prevQuestionClass);
    if (currentQuestion) {
        currentQuestion.style.display = "none";
    }

    let prevQuestionIndex = currentQuestionIndex - 1;
    let prevQuestion = document.querySelector(`.q${prevQuestionIndex}`);
    if (prevQuestion) {
        prevQuestion.style.display = "block";
        checkButtonsVisibility(prevQuestionIndex);
    }
}

function checkButtonsVisibility(currentQuestionIndex) {
    for (let i = 1; i <= 5; i++) {
        let question = document.querySelector(`.q${i}`);
        if (question) {
            question.style.display = i === currentQuestionIndex ? "block" : "none";
        }

        let nextButton = document.getElementById("submit" + i);
        let prevButton = document.getElementById("prev" + i);

        if (nextButton) {
            nextButton.disabled = false; // Enable next for all questions
        }

        if (prevButton) {
            prevButton.disabled = false; // Enable prev for all questions
        }
    }
}
