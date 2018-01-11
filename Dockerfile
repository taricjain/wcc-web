FROM node:latest
RUN git clone https://github.com/taricjain/wcc-web.git
WORKDIR /wcc-web/
RUN git checkout dev/sai
RUN npm install
EXPOSE 4200
CMD ["npm", "start"]