// Consumer

var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = "task_queue";

    channel.assertQueue(queue, {
      durable: true,
    });

    // Tells RabbitMQ not to five more than one message to a worker at a time.
    channel.prefetch(1);

    // We can open two or more workers, to deal with messages in a better way.
    // If the function that handles a message takes too long to execute,
    // the other messages will not be affected by it, because they are going
    // to be send to other workers.
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(
      queue,
      function (msg) {
        // For every dot on the message, we add 1 second to the function execution time
        var secs = msg.content.toString().split(".").length - 1;

        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(function () {
          console.log(" [x] Done");
        }, secs * 1000);
      },
      {
        // Protect the task even if the consumer dies.
        noAck: false, // Turns on manual consumer acknowledgments.
        // Now, even if we kill our worker with CTRL+C while it`s processing a message,
        // nothing will be lost.
      }
    );
  });
});
