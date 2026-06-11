FROM node:22

WORKDIR app/

COPY pacage*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev","--","host"] 
