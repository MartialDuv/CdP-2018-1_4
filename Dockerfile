FROM node:10

WORKDIR app/

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy everything
COPY . .

# Start server and expose port
EXPOSE 3000

CMD [ "node", "src/server.js" ]
