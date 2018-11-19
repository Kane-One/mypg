FROM shadowsocks/shadowsocks-libev

USER root

RUN apk add curl bash tcpdump

EXPOSE 8388:8388

CMD "ss-server" "-c" "/usr/local/etc/shadowsocks.conf" "-u"