from node:lts-bullseye as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
copy . .
run npm run build