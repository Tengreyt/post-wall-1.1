import { postCard } from "./models.js";
import { getPosts } from "./servacies.js";

const container = document.querySelector('.ag-courses_box');  // Исправлен класс на правильный

async function renderPosts(){
    try {
        const posts = await getPosts();  // Исправлено с getPost на getPosts
        container.innerHTML = '';  // Очищаем контейнер перед добавлением новых постов
        posts.forEach(post => container.innerHTML += postCard(post));  // Добавляем каждый пост в контейнер
    } catch (error) {
        console.error('Ошибка при рендеринге постов:', error);  // Обработка ошибок
    }
}

export {
    renderPosts
}