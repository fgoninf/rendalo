FROM node:10

#Creating app directory
WORKDIR /src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#this is just to work
#RUN npm install
# If you are building your code for production, then:
RUN npm install

# Bundle app source
COPY . .

#WS port
EXPOSE 8080

#First build the app
RUN npm run build

#Run the app, sample:
#CMD [ "node", "dist/main.js" ]
CMD [ "npm", "run", "start:prod"]






#docker build image
#$ docker build -t <your username>/node-web-app .

#docker run image
#docker run -p 8080:8080 -d <your username>/node-web-app
