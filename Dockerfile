# base image
FROM node:20.11.1-alpine as build

ARG build_env="production"
ENV env_build_env ${build_env}
RUN echo "build_env being used: $env_build_env"

ARG API_URL=""
ENV ENV_API_URL ${API_URL}
RUN echo "API_URL being used: $ENV_API_URL"

# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . /app

#RUN npm i @angular-devkit/build-angular --legacy-peer-deps
RUN npm ci

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#RUN sed -i "s~API_URL~$ENV_API_URL~g" /app/src/environments/environment.ts

# run tests
#RUN ng test --watch=false
#RUN ng e2e --port 4202

# generate build
#RUN ng build --configuration=$env_build_env --output-path=dist --base-href /admin/ --deploy-url /admin/

#RUN    ng build --configuration=$env_build_env --output-path=dist
RUN ng build --configuration=$env_build_env --output-hashing=all --output-path=dist


############
### prod ###
############

# base image
FROM nginx:1.26.2-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/browser /usr/share/nginx/html

# copy Angular SPA friendly config
COPY docker/nginx-conf /etc/nginx/conf.d/

# expose port 80
EXPOSE 80

# run nginx
#CMD ["nginx", "-g", "daemon off;"]
CMD sed -i "s~API_URL~$ENV_API_URL~g" /usr/share/nginx/html/assets/config.json && nginx -g "daemon off;"
