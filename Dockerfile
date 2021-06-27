FROM node:12.18.4 AS build
# Create app directory
WORKDIR /app
COPY . /app
RUN yarn install && yarn build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]