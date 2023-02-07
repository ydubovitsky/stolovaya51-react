# How to run this from another directory?
# For example:
# docker build . -t ydubovitsky/stolovaya51:0.0.1 -f docker/production/Dockerfile

# build environment
FROM node:alpine3.17 as build
LABEL author="y.dubovitsky"
LABEL type="production"
WORKDIR /react-app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
# RUN npm ci --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# The RUN command is only executed while the build image
RUN npm install
COPY . ./
# The RUN command is only executed while the build image
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /react-app/build /usr/share/nginx/html
EXPOSE 80
# The CMD command is only executed while the image is running
CMD ["nginx", "-g", "daemon off;"]