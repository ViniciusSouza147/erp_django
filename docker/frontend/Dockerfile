FROM node:22-alpine AS build
WORKDIR /app
#copie somente os manifestos para cache eficiente
COPY frontend/package*.json ./
#instalação determinística com lockfile
RUN npm ci
#permitir override de API Base no build
ARG VITE_API_BASE
ENV VITE_API_BASE=${VITE_API_BASE}
#copie o restante do código da SPA
COPY frontend ./
RUN if [ -n "$VITE_API_BASE" ]; then echo "VITE_API_BASE=$VITE_API_BASE" > .env.production; fi
RUN npm run build

#Nginx
FROM nginx:alpine

#copie o build para a pasta pública do Nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf

#exponha porta 80 e rode o Nginx no foreground
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
