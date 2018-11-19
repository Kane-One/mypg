FROM shadowsocks/shadowsocks-libev

USER root

RUN apk add curl bash

#ENV ALL_PROXY=socks5://127.0.0.1:1080

EXPOSE 1080:1080

CMD "ss-local" "-c" "/usr/local/etc/shadowsocks.conf" "-u"