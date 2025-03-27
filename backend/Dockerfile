FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 3333

CMD echo "API running on: http://localhost:3333" && bun run index.ts