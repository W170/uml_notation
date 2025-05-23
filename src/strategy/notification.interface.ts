export abstract class NotificationStrategy {
  abstract send(params: Record<string, unknown>): boolean;
}