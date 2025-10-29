 function validateForm(formId) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(input => {
      if(!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '';
      }
    });
    if(valid) {
      alert('Formulário enviado com sucesso!');
      form.reset();
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  });
}

 validateForm('contactForm');

