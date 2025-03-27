FROM node:18-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5173

CMD echo "Frontend running on: http://localhost:3000" && npm run preview