FROM node:14

RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    pip3 install graphviz
RUN apt install -y graphviz

RUN pip3 install diagrams

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]