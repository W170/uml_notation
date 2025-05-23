import {NotificationStrategy} from "../notification.interface";

export class WhatsApp extends NotificationStrategy {
  send(params: Record<string, unknown>): boolean {
    console.info("SEND NOTIFICATION VIA WHATSAPP", params);
    return true;
  }
}