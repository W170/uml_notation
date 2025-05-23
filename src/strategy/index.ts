import { NotificationFactory } from "./notification.factory";

function main() {
  const params = [
    { type: "sms", params: { text: "Hello world!" } },
    { type: "whatsapp", params: { text: "Hello world!" } },
    { type: "email", params: { text: "Hello world!" } }
  ];

  const notifications = params.map(({ type, params }) => {
    const notification = new NotificationFactory(type as any);

    return notification.send(params);
  })
  console.log(notifications);

}

main()