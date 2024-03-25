// helpers/signoutUser.js
import { getAuth } from 'firebase/auth';

// Функция для деавторизации пользователя
export const SignOutUser = (navigate) => {
  const auth = getAuth(); // Получаем auth
  auth.signOut()
    .then(() => {
      console.log('Пользователь успешно вышел из системы.');
      navigate("/");
    })
    .catch((error) => {
      console.error('Ошибка при деавторизации:', error.message);
    });
};
