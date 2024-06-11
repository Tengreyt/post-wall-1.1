import { createPost } from "./servacies.js";
import { renderPosts } from "./vue.js";

const openModelBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal-wrapper');
const closeModelBtn = document.querySelector('.close');
const postAddBtn = document.querySelector('.post-modals');
const formInputs = document.querySelectorAll('input');

if (openModelBtn) {
    openModelBtn.addEventListener('click', () => {
        modal.style.display = "flex"
        document.body.style.overflowY = "hidden"
    });
}

if (closeModelBtn) {
    closeModelBtn.addEventListener('click', () => {
        modal.style.display = "none"
        document.body.style.overflowY = "auto" 
    });
}

window.addEventListener('click', async (event) => {
    if(event.target === modal){
        modal.style.display = "none"
        document.body.style.overflowY = "auto"
    }
});

if (postAddBtn) {
    postAddBtn.addEventListener('click', async () => {
        try {
            // Убедитесь, что formInputs доступен и содержит необходимые элементы ввода
            const postData = {
                description: formInputs[0].value,
                title: formInputs[1].value,
                data: formInputs[2].value,
            };
            
            // Убедитесь, что createPost возвращает Promise и обрабатывает ошибки
            await createPost(postData);

            // Используйте таймаут, чтобы обновить список постов после создания нового поста
            // Настройте значение таймаута в зависимости от времени ответа сервера
            setTimeout(() => renderPosts(), 100); // <--

            // Закройте модальное окно и восстановите прокрутку страницы
            modal.style.display = "none";
            document.body.style.overflowY = 'auto';

        } catch (error) {
            console.log(error);
        }
    });
}