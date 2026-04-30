function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== button) {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        }
    });
    if (isActive) {
        button.classList.remove('active');
        answer.classList.remove('active');
    } else {
        button.classList.add('active');
        answer.classList.add('active');
    }
}
