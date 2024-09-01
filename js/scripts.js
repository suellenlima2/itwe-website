//modal de notifação de promoções
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.createElement('div');
    modal.id = 'promo-modal';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalText = document.createElement('p');
    modalText.innerText = 'Gostaria de receber notificações de promoções especiais?';

    const allowButton = document.createElement('button');
    allowButton.innerText = 'Permitir';

    const denyButton = document.createElement('button');
    denyButton.innerText = 'Não, obrigado';
    denyButton.classList.add('deny');

    allowButton.addEventListener('click', function() {
        modal.remove();
        alert('Você se inscreveu para receber notificações de promoções!');
    });

    denyButton.addEventListener('click', function() {
        modal.remove();
    });

    modalContent.appendChild(modalText);
    modalContent.appendChild(allowButton);
    modalContent.appendChild(denyButton);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
});


//formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact-form form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]');
        const phone = form.querySelector('input[name="phone"]');
        const email = form.querySelector('input[name="email"]');
        const address = form.querySelector('textarea[name="address"]');

        // Verificação dos campos
        if (name.value.trim() === '' || phone.value.trim() === '' || email.value.trim() === '' || address.value.trim() === '') {
            alert('Por favor, preencha todos os campos antes de enviar o formulário.');
            return; 
        }

        alert('Sua mensagem foi enviada com sucesso!');

        name.value = '';
        phone.value = '';
        email.value = '';
        address.value = '';
    });
});

//Animação ícone WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var whatsappIcon = document.querySelector('.information-column img');
        if (whatsappIcon) {
            whatsappIcon.classList.add('pulse-animation');
        }
    }, 3000); 
});

//Subscrever email
document.getElementById('subscribe-button').addEventListener('click', function() {
    var emailInput = document.getElementById('email-input');
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput.value)) {
        alert('Subscrição realizada com sucesso!');
        emailInput.classList.remove('error');
        emailInput.value = '';
    } else {
        alert('Por favor, insira um e-mail válido.');
        emailInput.classList.add('error');
    }
});




