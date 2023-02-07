# How to run this from another directory?
# For example:
# docker build . -t ydubovitsky/stolovaya51:0.0.1 -f docker/dev/Dockerfile

FROM node:alpine3.17 as build
LABEL author="y.dubovitsky"
LABEL type="dev"
WORKDIR /react-app
COPY package.json ./
COPY package-lock.json ./
# The RUN command is only executed while the build image
RUN npm install
COPY . ./
EXPOSE 3000
# The CMD command is only executed while the image is running
CMD npm run start