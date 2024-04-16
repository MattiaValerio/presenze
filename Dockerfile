FROM node:lts-alpine as build
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force
COPY . .
# RUN npx drizzle-kit push:pg --config=src/lib/server/drizzle.config.ts
RUN npm run build


FROM node:lts-alpine AS production
COPY --from=build /app/build .
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .
RUN npm ci --omit dev --force
EXPOSE 3000
CMD ["node", "."]