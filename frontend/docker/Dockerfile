# frontend/Docker/Dockerfile
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Сборка приложения
RUN npm run build

# Указываем порт для React приложения
EXPOSE 5173

# Запускаем приложение
CMD ["npm", "run", "dev"]
