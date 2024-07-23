document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const puzzleSolved = localStorage.getItem('puzzleSolved');

    if (puzzleSolved !== 'true') {
        // Redirect to the puzzle page if the puzzle hasn't been solved
        window.location.href = 'index.html';
    }
    
    const toggleTechStackButton = document.getElementById('toggleTechStack');
    const techStackList = document.getElementById('techStackList');

    if (toggleTechStackButton && techStackList) {
        console.log('Elements found');
        toggleTechStackButton.addEventListener('click', function() {
            console.log('Button clicked');
            if (techStackList.style.display === 'none' || techStackList.style.display === '') {
                techStackList.style.display = 'block';
                this.textContent = 'Show Less';
            } else {
                techStackList.style.display = 'none';
                this.textContent = 'Show More Tech Stack';
            }
        });
    } else {
        console.error('Button or list element not found');
    }

    // Toggle More Projects
    const showMoreButton = document.getElementById('showMoreProjectsButton');
    const moreProjects = document.querySelector('.more-projects');

    if (showMoreButton && moreProjects) {
        showMoreButton.addEventListener('click', function() {
            if (moreProjects.style.display === 'none' || moreProjects.style.display === '') {
                moreProjects.style.display = 'block';
                this.textContent = 'Show Less Projects';
            } else {
                moreProjects.style.display = 'none';
                this.textContent = 'Show More Projects';
            }
        });
    } else {
        console.error('Show more projects button or additional projects element not found');
    }

});

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM fully loaded and parsed');

//     const puzzleSolved = localStorage.getItem('puzzleSolved');

//     if (puzzleSolved !== 'true') {
//         // Redirect to the puzzle page if the puzzle hasn't been solved
//         window.location.href = 'index.html';
//     }
// });