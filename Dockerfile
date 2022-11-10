FROM node:16.14-alpine
WORKDIR /app-backend
COPY package* ./
RUN npm install
COPY . .
RUN npx tsc
CMD ["npm", "start"]