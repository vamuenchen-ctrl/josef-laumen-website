function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const isActive = button.classList.contains('active');

    // Close all other FAQs
    document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== button) {
            q.classList.remove('active');
            q.setAttribute('aria-expanded', 'false');
            q.nextElementSibling.classList.remove('active');
        }
    });

    // Toggle current FAQ
    if (isActive) {
        button.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        answer.classList.remove('active');
    } else {
        button.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        answer.classList.add('active');
    }
}

// Keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach((question, index) => {
        question.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextQuestion = faqQuestions[index + 1];
                if (nextQuestion) nextQuestion.focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevQuestion = faqQuestions[index - 1];
                if (prevQuestion) prevQuestion.focus();
            }
        });
    });
});
