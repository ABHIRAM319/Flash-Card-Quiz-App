let flashcards = [];
let currentFlashcardIndex = 0;
let score = 0;

document.getElementById('add-flashcard').addEventListener('click', function() {
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;

    if (question && answer) {
        flashcards.push({ question, answer });
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
        alert('Flashcard added!');
    } else {
        alert('Please fill in both fields.');
    }

    if (flashcards.length > 0) {
        document.getElementById('start-quiz').style.display = 'block';
    }
});

document.getElementById('start-quiz').addEventListener('click', function() {
    currentFlashcardIndex = 0;
    score = 0;
    document.getElementById('score').innerText = '';
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('start-quiz').style.display = 'none';
    showFlashcard();
});

document.getElementById('show-answer').addEventListener('click', function() {
    const answer = flashcards[currentFlashcardIndex].answer;
    alert(`Answer: ${answer}`);
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
});

document.getElementById('next-flashcard').addEventListener('click', function() {
    currentFlashcardIndex++;
    if (currentFlashcardIndex < flashcards.length) {
        showFlashcard();
    } else {
        alert(`Quiz finished! Your score: ${score}/${flashcards.length}`);
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('start-quiz').style.display = 'block';
    }
});

function showFlashcard() {
    const flashcard = flashcards[currentFlashcardIndex];
    document.getElementById('flashcard').innerText = `Question: ${flashcard.question}`;
}