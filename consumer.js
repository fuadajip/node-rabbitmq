require("dotenv").config();
const amqp = require("amqplib");

amqp
  .connect(process.env.CLOUDAMQP_URL)
  .then(conn => {
    return conn.createChannel().then(ch => {
      const ok = ch.assertQueue("Queue A", { durable: false }); // declare queue
      ok
        .then(() => {
          /* catch message from RabbitMQ */
          return ch.consume(
            "Queue A",
            msg => console.log("- Received", msg.content.toString()),
            { noAck: true }
          );
        })
        .then(() => {
          console.log("* Waiting for messages. Ctrl+C to exit");
        });
    });
  })
  .catch(console.warn);
