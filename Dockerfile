FROM node:14-stretch-slim as build
# Create app directory
WORKDIR /app
COPY . /app
RUN yarn install && yarn build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]