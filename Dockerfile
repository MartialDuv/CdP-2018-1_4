FROM node:8.11.1

# install dependencies
WORKDIR ./
COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . .

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 80
EXPOSE 80

CMD [ "npm", "run", "start" ]