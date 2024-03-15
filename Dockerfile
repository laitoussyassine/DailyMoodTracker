# specify the parent image 
FROM node:20-alpine

# specify the working directory instruction of the image
WORKDIR /app

# 
COPY . .

# install project dependencies
RUN npm install

# defalut vite port
EXPOSE 5173

# Start the app
CMD ["npm","run","dev"]