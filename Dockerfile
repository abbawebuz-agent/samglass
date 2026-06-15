# SamGlass — rasmiy Bun image (Nixpacks node-18 muammosini chetlab o'tadi)
FROM oven/bun:1

WORKDIR /app

# Dependencylar (cache uchun avval lockfile)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Kod + build
COPY . .
RUN bun run build

ENV PORT=8080
EXPOSE 8080

CMD ["bun", "server.js"]
