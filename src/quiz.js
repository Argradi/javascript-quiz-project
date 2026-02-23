class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }
    shuffleQuestions() {
        let arr = this.questions.slice()
        let nums = []

        // this.choices.forEach(function(element) {
        //     Math.random() * this.choices.length
        // })

        for (let i = 0; i < this.questions.length; i++) {
            let n = Math.floor(Math.random() * this.questions.length)

            while (nums.includes(n)) {
                n = Math.floor(Math.random() * this.questions.length)
            }

            nums.push(n)
            this.questions[i] = arr[n]
        }

        return this.questions


 }
    checkAnswer(answer) {
        if (answer === this.getQuestion().answer) {
            this.correctAnswers++;
        }

    }
    hasEnded(){
        if(this.currentQuestionIndex<this.questions.length){
            return false
        }else if(this.currentQuestionIndex===this.questions.length){
            return true
        }
    }

}
