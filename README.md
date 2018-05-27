# Nodejs with Rabbit MQ
Implementation of message broker with cloudamqp nodejs


## Prerequisite
Signup to Cloudamqp and pick free plan [here](https://www.cloudamqp.com/plans.html)

## Installation
After signup and pick "Lemur plan" on Cloudamqp, place your Cloudamqp url instance into .env.sample and rename this file into .env

```bash
yarn install
```

## Run Producer
```bash
yarn start producer
```

## Run Consumer
```bash
yarn start consumer
```