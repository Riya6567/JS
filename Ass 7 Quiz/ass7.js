function submitQuiz(){
    const correctAnswers = {
        q1: 'All of the mentioned',
        q2: 'Object-Based',
        // Add correct answers for other questions ...
    };
    let score = 0;
    for(let question in correctAnswers){
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if(selectedAnswer && selectedAnswer.value === correctAnswers[question]){
            score++;
        }
    }
    document.getElementById('result').innerHTML = `You scored ${score}/${Object.keys(correctAnswers).length}`;
}