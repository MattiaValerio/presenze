FROM node:lts-alpine as build
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force
COPY . .
RUN npm run generate
CMD ["npm", "run", "dev"] 


# FROM node:lts-alpine AS production
# COPY --from=build /app/build .
# COPY --from=build /app/package.json .
# COPY --from=build /app/package-lock.json .
# RUN npm i --force
# EXPOSE 3000
# CMD ["node", "."]