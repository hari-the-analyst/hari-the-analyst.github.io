document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent project card
            const projectCard = this.closest('.project-card');
            // Find the hidden details within that card
            const details = projectCard.querySelector('.project-details-hidden');

            if (details.style.maxHeight) {
                // If details are visible, hide them
                details.style.maxHeight = null;
                details.style.display = 'none';
                this.textContent = 'Know More';
            } else {
                // If details are hidden, show them
                details.style.display = 'block';
                details.style.maxHeight = details.scrollHeight + "px";
                this.textContent = 'Show Less';
            }
        });
    });
});