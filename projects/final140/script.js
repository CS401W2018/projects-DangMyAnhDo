document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('foodExperienceForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const newSubmissionBtn = document.getElementById('newSubmission');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server here
        // For this project, we'll just simulate a successful submission
        
        // Hide the form and show the thank you message
        form.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
        
        // Scroll to the thank you message
        thankYouMessage.scrollIntoView({ behavior: 'smooth' });
    });

    newSubmissionBtn.addEventListener('click', function() {
        // Reset the form and show it again
        form.reset();
        form.classList.remove('hidden');
        thankYouMessage.classList.add('hidden');
        
        // Scroll back to the form
        form.scrollIntoView({ behavior: 'smooth' });
    });
});