FROM node:14-stretch-slim as builder
# Create app directory
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
ENTRYPOINT ["nginx","-g","daemon off;"]