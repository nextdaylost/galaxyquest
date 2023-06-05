FROM node:18.16.0 AS build

WORKDIR /app

COPY . .

RUN npm install -f && \
    npm run build

FROM nginx:1.25.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist/galaxy-quest .
COPY conf/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp

ENTRYPOINT ["nginx", "-g", "daemon off;"]
