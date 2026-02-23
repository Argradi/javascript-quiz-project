class Question {
    constructor(text, choices, answer, difficulty) {
        this.text = text
        this.choices = choices
        this.answer = answer
        this.difficulty = difficulty
    }

    shuffleChoices() {
        let arr = this.choices.slice()
        let nums = []

        // this.choices.forEach(function(element) {
        //     Math.random() * this.choices.length
        // })

        for(let i = 0; i < this.choices.length; i++){
            let n = Math.floor(Math.random() * this.choices.length)

            while(nums.includes(n)){
                n = Math.floor(Math.random() * this.choices.length)
            }

            nums.push(n)
            this.choices[i] = arr[n]
        }
        
        return this.choices
    }
}