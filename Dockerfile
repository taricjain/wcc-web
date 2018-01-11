FROM node:latest
RUN git clone https://github.com/taricjain/wcc-web.git
RUN git checkout dev/sai
RUN npm install
EXPOSE 3000
CMD ["ng", "serve", "--port", "3000"]