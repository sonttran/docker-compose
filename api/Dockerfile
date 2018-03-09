FROM        node:8 
WORKDIR     /api 
COPY        package.json /app 
RUN         npm install
RUN         npm install nodemon -g
COPY        . /api
CMD         nodemon server.js
EXPOSE      4000 