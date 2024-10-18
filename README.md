# Хотите прокачаться?

##### Этот сайт поможет вам подобрать нужное упражнение, расскажет на кикие группы мышц оно воздействует, предложит видео урок, в котором демонстрируется прапвильное исполнение упражнения

## ССылка на деплой Vercel exercises-a63hts4qt-andreysavelievs-projects.vercel.app
____

![screen1](https://github.com/user-attachments/assets/5840ec33-1232-4b1f-97b6-5fd00f421cac)
![screen2](https://github.com/user-attachments/assets/32cc142b-9f4a-4944-b2a2-6c558882d6d5)


>> Stack: Vite, React, MUI, TS
___
#### Как зупустить
Из-за того что я использую бесплатную подписку rapid-api у меня ограниченное количетсво запросов в месяц. Поэтому деплой на верселе может не корректно работать.
Чтобы посмотреть на весь функционал сайта самому надо:
1. Скопировать репозиторий
2. Зайти на RapidApi и подписаться на нужныe api и взять ключи
2.1 https://rapidapi.com/h0p3rwe/api/youtube-search-and-download - api для поиска видео на yputube
2.2 https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel - api с бд упражнений
3. Сконфигурировать .env файл
```.env
.env
VITE_X_RapidAPI_Key=<ВАШ КЛЮЧ ОТ API С ФИЗ. УПРАЖНЕНИЯМИ>
VITE_X_RapidAPI_Key_YT=<ВАШ КЛЮЧ ОТ API YouTube>
```
4. Отрегдактировать vite.congif.ts
```vite.config.ts
vite.config.ts
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
```
5. Вы прекрасны! Проект готов к запуску!
