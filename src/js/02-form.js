import debounce from 'debounce';

const Feedback_Storage_Key = "feedback-form-state";
const form = document.querySelector('.feedback-form');
try {
    const InitialFormValue = JSON.parse(localStorage.getItem(Feedback_Storage_Key));
    if (InitialFormValue) {
        form.elements.message.value = InitialFormValue.message;
        form.elements.email.value = InitialFormValue.email;
        console.log(InitialFormValue);
    } else {
        console.log('The is no data in Message and Email field');
    }
} catch (Error) {
    console.log('Failed to parse data from JSON: ', Error);
}

form.addEventListener('submit', (params) => {
    params.preventDefault();
    const { email, message } = params.currentTarget.elements;
    if (email.value === '' || message.value === '') {
        alert('All form fields must be filled in');
    } else {
        const data = {
            email: email.value.trim(),
            message: message.value.trim(),
        }
        console.log(data);
        localStorage.removeItem(Feedback_Storage_Key);
        form.reset();
    }
});

form.addEventListener('input', debounce(() => {
    const { email, message } = form.elements;
    const data = {
        email: email.value.trim(),
        message: message.value.trim(),
    }
    localStorage.setItem(Feedback_Storage_Key, JSON.stringify(data));
}, 250));