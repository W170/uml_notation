import {NotificationStrategy} from "./notification.interface";
import {NotificationFactory, SupportedProviders} from "./notification.factory";

export class Notification {
  private notificationStrategy: NotificationStrategy;

  public setNotificationMethod(method:SupportedProviders){
    this.notificationStrategy = new NotificationFactory(method)
  }

  public launchNotification(params:{[param:string]:string}){
    if (!this.notificationStrategy) throw new Error("Before sending a notification you must specify a valid method.")
    this.notificationStrategy.send(params);
  }
}