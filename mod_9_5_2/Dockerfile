FROM node:20-alpine3.17

# Папка приложения
WORKDIR app

# Установка зависимостей
COPY package*.json ./

RUN npm install


# Копирование файлов проекта
COPY . .

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 3000

# Запуск проекта
CMD ["npm", "start"]
