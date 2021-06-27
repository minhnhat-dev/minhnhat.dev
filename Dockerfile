FROM node:14-stretch-slim as react_build
# Create app directory
WORKDIR /app
COPY . /app
# #prepare the contiainer for building react 
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent 
RUN npm run build 

FROM nginx:latest
COPY --from=react_build /app/build /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]
