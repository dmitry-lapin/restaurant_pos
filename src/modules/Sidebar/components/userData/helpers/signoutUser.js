// helpers/signoutUser.js
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Функция для деавторизации пользователя
export const SignOutUser = (navigate) => { // Принимаем navigate как аргумент
  const auth = getAuth(); // Получаем auth
  auth.signOut() // Используем auth для деавторизации
    .then(() => {
      // Действия после успешной деавторизации, например, очистка данных пользователя
      console.log('Пользователь успешно вышел из системы.');
      // Удаление куки с данными пользователя
      navigate("/");
    })
    .catch((error) => {
      console.error('Ошибка при деавторизации:', error.message);
    });
};
