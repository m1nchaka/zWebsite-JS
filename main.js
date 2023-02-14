const formElement = document.querySelector('.form-login');
console.log(formElement);
formElement.addEventListener('submit', e => {
    e.preventDefault();
    // const data = new FormData(formElement);
    // console.log(data.get('username'))
    console.log('works');
})