document.addEventListener('DOMContentLoaded', () => {
    const puzzles = [
        {
            question: "What is the smallest positive integer that is divisible by all of the numbers from 1 to 10?",
            answer: "2520"
        },
        {
            question: "What is the sum of all even numbers between 1 and 50?",
            answer: "650"
        },
        {
            question: "If five cats can catch five mice in five minutes, how many minutes will it take one cat to catch one mouse?",
            answer: "5"
        }
    ];

    // Function to get a random puzzle
    function getRandomPuzzle() {
        const randomIndex = Math.floor(Math.random() * puzzles.length);
        return puzzles[randomIndex];
    }

    // Check if the puzzle is already solved
    if (localStorage.getItem('puzzleSolved') === 'true') {
        document.getElementById('puzzle').style.display = 'none'; // Hide the puzzle if already solved
        document.getElementById('navLinks').style.display = 'block'; // Show the navigation links
    } else {
        document.getElementById('navLinks').style.display = 'none'; // Hide navigation links if puzzle not solved

        // Get a random puzzle and set it
        const puzzle = getRandomPuzzle();
        document.getElementById('puzzleQuestion').textContent = puzzle.question;

        document.getElementById('puzzleForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const answer = document.getElementById('answer').value.trim();
            const message = document.getElementById('message');

            if (answer.toLowerCase() === puzzle.answer.toLowerCase()) {
                message.textContent = 'Correct! Access to other pages is now available.';
                message.style.color = 'green';

                // Trigger confetti
                if (typeof confetti === 'function') {
                    confetti();
                } else {
                    console.error('Confetti function is not defined.');
                }

                setTimeout(() => {
                    // Show hidden navigation links and hide the puzzle
                    localStorage.setItem('puzzleSolved', 'true');
                    document.getElementById('puzzle').style.display = 'none';
                    document.getElementById('navLinks').style.display = 'block';
                }, 2000); // 2 seconds
            } else {
                message.textContent = 'Incorrect. Please try again.';
                message.style.color = 'red';
            }
        });
    }
});
