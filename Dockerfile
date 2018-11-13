FROM node:10

WORKDIR app/

# Install app dependencies
COPY package.json .

RUN npm install

# Copy everything
COPY . .

# Start server and expose port
#CMD [ "node", "server.js" ]
