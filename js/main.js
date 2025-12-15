document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Динамическое обновление года в футере
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // 2. Имитация отправки контактной формы
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартную отправку формы
            
            const statusMessage = document.getElementById('form-status');
            
            // Имитация процесса (задержка)
            statusMessage.textContent = 'Отправка...';
            
            setTimeout(() => {
                // В реальном проекте здесь был бы AJAX-запрос
                
                statusMessage.textContent = 'Спасибо! Ваше сообщение успешно отправлено.';
                statusMessage.style.color = 'green';
                
                // Очистка формы (для примера)
                contactForm.reset();

                // Сброс сообщения через 4 секунды
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 4000);

            }, 1500);
        });
    }
});