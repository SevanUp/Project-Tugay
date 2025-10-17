# Тугай Роман - Портфолио Скульптора

Персональный веб-сайт портфолио для скульптора Тугай Роман.

## 📁 Структура Проекта

```
Project Tugay/
├── index.html              # Главная страница
├── css/
│   ├── style.css          # Основные стили
│   └── animations.css     # CSS анимации
├── js/
│   ├── main.js            # Обработчики событий
│   └── animations.js      # Intersection Observer анимации
├── img/                   # Изображения контента
│   ├── slide{1-3}.jpg    # Слайды героя
│   ├── about1.jpg        # Фото "Обо мне"
│   ├── work{1-4}.jpg     # Изображения скульптур
│   ├── news{1-3}.jpg     # Изображения выставок
│   └── contacts.jpg      # Фон контактов
├── icons/                 # SVG иконки
└── .github/
    └── copilot-instructions.md  # AI инструкции
```

## 🎨 Технологии

- **HTML5** - Семантическая разметка
- **CSS3** - Vanilla CSS с современными функциями
  - CSS Grid & Flexbox
  - CSS Variables
  - CSS Animations
  - Media Queries (адаптивный дизайн)
- **JavaScript (ES6+)** - Vanilla JS
  - Intersection Observer API
  - Form Validation
  - Smooth Scrolling
  - Event Handling

## 🚀 Запуск

Просто откройте `index.html` в современном браузере:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Или используйте локальный сервер:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve

# VS Code - Live Server extension
# Щелкните правой кнопкой мыши index.html -> "Open with Live Server"
```

Затем откройте `http://localhost:8000` в браузере.

## 📱 Разделы

1. **Главная (Hero)** - Полноэкранное изображение с именем художника
2. **Обо мне** - Биография с круглым фото профиля
3. **Скульптуры** - Сетка изображений скульптур
4. **Выставки и публикации** - Карточки новостей с изображениями
5. **Контакты** - Контактная форма и социальные ссылки
6. **Подвал (Footer)** - Навигация, контактная информация, социальные иконки

## ⚡ Функции

### Реализованные
- ✅ Адаптивный дизайн (Desktop, Tablet, Mobile)
- ✅ Плавная прокрутка
- ✅ Анимации при прокрутке (Intersection Observer)
- ✅ Параллакс эффект на героя
- ✅ Валидация формы
- ✅ Автоматическое расширение текстового поля
- ✅ Эффекты наведения и переходов
- ✅ Активное состояние навигации при прокрутке

### Готовые для реализации (пустые обработчики)
- 🔲 `handleFormSubmit()` - Отправка контактной формы
- 🔲 `handleButtonClick('about-more')` - Кнопка "Подробнее"
- 🔲 `handleButtonClick('sculptures-more')` - Кнопка "Смотреть ещё" (скульптуры)
- 🔲 `handleButtonClick('news-more')` - Кнопка "Смотреть ещё" (новости)

## 🎨 Дизайн

### Типографика
- **Заголовки**: Montserrat (Medium/SemiBold), 48px, вес 400
- **Подзаголовки**: Montserrat Medium, 36px, #555555, вес 400
- **Текст**: Open Sans Regular, 16px, вес 400

### Цветовая палитра
- **Основной текст**: #555555
- **Акцентный бирюзовый**: #00BCD4
- **Светло-голубой фон**: #D4E8F0
- **Темный фон**: #1a1a1a / #000000
- **Светлый текст**: #ffffff

### Контрольные точки адаптивности
- **Desktop**: 1920px
- **Tablet**: 768px
- **Mobile**: 480px

## 🔧 Настройка

### Обновление контактной информации

Отредактируйте `index.html`:

```html
<!-- Телефон -->
<a href="https://wa.me/79999657632" class="social-link">
    <span>+79999657632</span>
</a>

<!-- Email -->
<a href="mailto:roman.tugay@gmail.com">
    <span>roman.tugay@gmail.com</span>
</a>

<!-- Социальные ссылки -->
<a href="https://vk.com/username" target="_blank">
<a href="https://facebook.com/username" target="_blank">
<a href="https://instagram.com/tugayan.roman" target="_blank">
```

### Добавление новых изображений

1. Добавьте изображения в папку `img/`
2. Обновите пути `src` в `index.html`
3. Оптимизируйте изображения для веба (рекомендуется WebP)

### Настройка CSS переменных

Отредактируйте `:root` в `css/style.css`:

```css
:root {
    --primary-text: #555555;
    --accent-cyan: #00BCD4;
    --bg-light-blue: #D4E8F0;
    /* ... */
}
```

## 📝 JavaScript Обработчики

### Отправка формы

```javascript
// В js/main.js
function handleFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    // TODO: Реализовать отправку на бэкенд
    // Пример: fetch('/api/contact', { method: 'POST', body: data })
}
```

### Действия с кнопками

```javascript
// В js/main.js
function handleButtonClick(action, event) {
    switch(action) {
        case 'sculptures-more':
            // TODO: Загрузить больше скульптур
            break;
        // ...
    }
}
```

## 🌐 Поддержка браузеров

Современные браузеры с поддержкой ES6+:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 Лицензия

© 2025 Тугай Роман. Все права защищены.

## 🤝 Вклад

Для вопросов или предложений, пожалуйста, свяжитесь через контактную форму на сайте.

---

**Примечание**: Этот проект использует vanilla HTML/CSS/JS без фреймворков или инструментов сборки для простоты и производительности.
