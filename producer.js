require("dotenv").config();
const amqp = require("amqplib");

amqp
  .connect(process.env.CLOUDAMQP_URL)
  .then(conn => {
    return conn.createChannel().then(ch => {
      const q = "Queue A"; // queue name
      const msg = "Hello world!"; // message to sent out to RabbitMQ

      ch.assertQueue(q, { durable: false }); // create queue
      setInterval(() => {
        ch.sendToQueue(q, Buffer.from(msg));
        console.log("- Sent", msg);
      }, 2000);
    });
    // .finally(() => conn.close());
  })
  .catch(console.warn);
