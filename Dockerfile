FROM node:10

WORKDIR app/

# Install app dependencies
COPY package.json .

#RUN npm init -y
#RUN npm install express --save
RUN npm install

# Copy everything
COPY . .

# Start server and expose port
#CMD [ "node", "server.js" ]
