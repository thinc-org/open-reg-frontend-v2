FROM node:12-alpine AS build
ENV NODE_ENV production

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

FROM nginx:1.19.2-alpine 
COPY --from=build /app/build /var/www
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 3000



