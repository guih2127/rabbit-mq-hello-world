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
node send.js
```

If you execute the script multiple times, many messages will be enqueued!

After that, you can see the messages on the queue using:
```
node receive.js
```