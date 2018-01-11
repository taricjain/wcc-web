FROM node:latest
RUN git clone https://github.com/taricjain/wcc-web.git
WORKDIR /wcc-web/
RUN git checkout dev/sai
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]