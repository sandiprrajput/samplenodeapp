This is sample nodejs application code, using docker to build and run the application server.

Need to create a docker file for creating the docker image and run that image on docker container. Please check the below docker file for understanding.

#This is a nodejs base image for building a new image.
FROM node:10

#configure the application work directory path 
WORKDIR /usr/src/app

#Copy the package json file
COPY package*.json ./

# Install application dependencies
RUN npm install

#copy your application source code bundler inside docker image. 
COPY ./ ./

# Application runs on port 3000. Expose port 3000 
EXPOSE 3000

# Run command
CMD ["node","index.js"]


I am using the AWS cloud platform to set up this application using below AWS resources:
ALB
ECS
ECR
 
Used Jenkins pipeline for CI/CD.


