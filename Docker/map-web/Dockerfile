FROM alpine

RUN apk add nginx

RUN mkdir /run/nginx

RUN apk add nodejs

RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx/conf.d/* /etc/nginx/conf.d

