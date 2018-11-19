FROM twosee/swoole-coroutine

RUN apt --assume-yes  install nginx

COPY nginx/sites/* /etc/nginx/sites-enabled

COPY php/php.ini /usr/local/etc/php/php.ini
