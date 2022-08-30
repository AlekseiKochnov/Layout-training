const select = () => {
  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false
  });
}

select();


// const form = document.querySelector('.form')
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели имя',
      Message: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 5,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#tel', [
    {
      rule: 'function',
      validator: function () {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Вы не ввели телефон',
    },
  ]);