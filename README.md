# CustomerSupport

- Right now its giving random reply messages, its pending to integrate a IA that analyze the customer message. For example the Ultimate IA but their public API is not open yet.

## Steps to run the project:

- if you haven't already: copy `.env.example` to `.env` at the project folder level.

```bash
$ cd ./docker/project
# Db and application will start, on mac if it is the first time it takes some time due to the copy of the volumes.
$ docker-compose up
```

## Swagger:

After running it you can find the Swagger documentation at: http://localhost:3000/docs#/

## Steps to run the Tests:

- if you haven't already: copy `.env.example` to `.env` at the project folder level.

```bash
$ cd ./docker/test-db
# The Db for testing proposes will start.
$ docker-compose up
# To return to the project folder.
$ cd ../../project
# To run the test.
$ yarn test
```

## Stay in touch

- Author - [Daniel Hernández](https://github.com/danielhdezller)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/daniel-hernandez-ller/)


![officer-peña](https://github.com/danielhdezller/customer-support/assets/63543622/eb4235ba-6d99-461d-a688-f9d0379808af)
