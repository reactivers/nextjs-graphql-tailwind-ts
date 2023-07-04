FROM cypress/included:10.9.0 as base
WORKDIR /usr/src/app
RUN npm i -g yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 100000
COPY . .
RUN npm run generate:test
RUN npm run e2e:headless
RUN npm run generate
RUN npm run build
RUN npm run sitemap
RUN npm run export:only


FROM nginx:alpine as prod
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/out/ ./out

EXPOSE 80

COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
