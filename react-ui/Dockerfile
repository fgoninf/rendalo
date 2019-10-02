FROM node:12.2.0-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . . 
RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN REACT_APP_BASE_URL=http://localhost:8080 npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]






#docker build image
#docker build -t my-app:v1 .

#docker run image
#docker run -p 80:80 my-app:v1