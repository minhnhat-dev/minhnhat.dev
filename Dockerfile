FROM node:14-stretch-slim as build
# Create app directory
WORKDIR /app
COPY . /app
RUN npm install && npm build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html