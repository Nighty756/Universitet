console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+375 (99) 999-99-99');
inputMask.mask(telSelector);
inputCheckbox = document.querySelector('.js-input-checkbox');
    blockCheckbox = document.querySelector('.js-chekbox_block');

const validation = new JustValidate('.form');
validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите 3 и более символов'
     
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Запрещено вводить более 30 символов'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.input-textarea', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Задайте вопрос',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 9;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

   
    
    if(!inputCheckbox.checked) {
        console.log('checkbox not checked');
        inputCheckbox.classList.add('error');
        blockCheckbox.classList.add('error');
        return false;
    } else {
        inputCheckbox.classList.remove('error');
        blockCheckbox.classList.remove('error');
    }

    event.target.reset();
  });
  