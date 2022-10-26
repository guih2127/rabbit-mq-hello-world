## What it is?
Simple hello world using RabbitMQ and Javascript. An publisher sends a Hello World message to a consumer.

## How to run?
You need RabbitMQ to run your project, I recommend using the RabbitMQ Docker image for this:

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.10-management
```

You need to install Node as well.

Then, you can send messages to the queue using:
```
node hello-world/send.js
```

If you execute the script multiple times, many messages will be enqueued!

After that, you can see the messages on the queue using:
```
node hello-world/receive.js
```

## Topics studied here

### Simple Hello World with RabbitMQ
A simple hello world using rabbitMQ consists in two differents app and rabbitMQ intermediating them.
A producer sends a message to the queue, and a consumer that is listening to this queue receive those
messages.

### Work Queues
With Work Queues, we can distribute our messages among different workers. With that, we can make
the workers more efficient.

### Publish/Subscribe
With this pattern, we can send messages to more than one consumer. We use the concept of exchanges,
that intermediates any communication with a queue. Here, we used the fanout exchange, that
just redirect the message to all the queues that it knows.

### Routing
Routing give us the possibility to filter the messages received based on arguments. We can select
the messages that a consumer will receive based on a key. For that, we use the direct exchange.

### Topics
With topics, we can receive messages based on a pattern. We can filter the messages that a consumer
will receive based on more than just one argument. For that, we use the topic exchange.