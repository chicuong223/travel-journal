FROM node:16 AS builder
# set working directory
WORKDIR /build

#install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

FROM nginx:1.19-alpine AS server
COPY --from=builder /build/build/ /usr/share/nginx/html