FROM 172.16.100.39/docker/nginx:spa-1.3
ADD ./dist/ /usr/share/nginx/html
