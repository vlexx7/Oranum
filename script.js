// Пример простого скрипта для анимации кнопок
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Вы будете перенаправлены на страницу регистрации!');
  });
});