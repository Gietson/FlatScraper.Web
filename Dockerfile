FROM node

COPY . /app
WORKDIR /app

ENV APP_ENV prod

RUN npm install
# Expose the port the app runs in
EXPOSE 4200

# Serve the app
# CMD ["npm", "start"]
# RUN ng build --prod
CMD ["ng", "serve", "--host", "0.0.0.0" ]
