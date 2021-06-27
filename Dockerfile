FROM node:12.18.4 as build
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
ENV PORT 3000

WORKDIR /app
COPY . /app

RUN npm install && npm run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html