FROM node:12-alpine

RUN apk add --no-cache git; mkdir -p /eli
WORKDIR /eli

COPY . .
RUN npm ci --no-optional --only=prod

CMD ["npm", "start"]
