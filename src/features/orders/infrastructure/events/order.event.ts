import { IDomainEvent } from "../../../base";
import { OrderEventNameEnum, OrderEventType } from "../../domain";

export class OrderDomainEvent
  implements IDomainEvent<OrderEventType, Promise<void>>
{
  async emit(event: OrderEventType): Promise<void> {
    if (event.name === OrderEventNameEnum.CREATED) {
      console.log("Order created event", event.meta);

      //logic send mail
    }
  }
}
