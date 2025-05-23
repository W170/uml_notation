import {NotificationStrategy} from "../notification.interface";

export class Sms extends NotificationStrategy {
  send(params: Record<string, unknown>): boolean {
    console.info("SEND NOTIFICATION VIA SMS", params);
    return true;
  }
}