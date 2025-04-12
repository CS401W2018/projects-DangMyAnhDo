document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('foodExperienceForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const newSubmissionBtn = document.getElementById('newSubmission');

    // Only proceed if elements exist
    if (!form || !thankYouMessage || !newSubmissionBtn) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
        
        try {
            // Simulate server submission delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Hide form and show thank you message
            form.classList.add('hidden');
            thankYouMessage.classList.remove('hidden');
            thankYouMessage.scrollIntoView({ behavior: 'smooth' });
            
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error submitting your form. Please try again.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });

    newSubmissionBtn.addEventListener('click', function() {
        form.reset();
        form.classList.remove('hidden');
        thankYouMessage.classList.add('hidden');
        form.scrollIntoView({ behavior: 'smooth' });
        
        // Focus on first form field for better UX
        const firstField = form.querySelector('input, select, textarea');
        if (firstField) firstField.focus();
    });

    // Enhanced validation feedback
    form.addEventListener('input', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            if (e.target.validity.valid) {
                e.target.classList.remove('invalid');
            } else {
                e.target.classList.add('invalid');
            }
        }
    });
});