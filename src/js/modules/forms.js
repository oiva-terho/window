import { checkNumInputs } from "./inputCheck";

export const forms = (state) => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то полшло не так'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    }; 

    const clearInputs = () => inputs.forEach(input => input.value = '');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.append(statusMessage);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc')) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            postData('assets/server.php', formData)
                .then(postResult => {
                    console.log(postResult);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};