FROM node:alpine

WORKDIR "/app"

ENV PATH /app/node_modules/.bin:$PATH

COPY ./power_map_v1/package.json ./
COPY ./power_map_v1/package-lock.json ./


RUN npm install npm
RUN npm install yarn
RUN npm install react-scripts
RUN npm install axios
RUN npm install react-apexcharts apexcharts
RUN npm install react-dock
RUN npm install react-bootstrap-icons

CMD ["yarn","start"]
