import { Order, OrderStatusEnum } from "../../../domain";
import { OrderDomainEvent } from "../../../infrastructure/events";

export class CreateOrderUseCase {
  constructor() {}

  async execute(): Promise<Order> {
    const order = new Order(new OrderDomainEvent());
    order.create({
      id: "1",
      userId: "1",
      items: [],
      status: OrderStatusEnum.NEW,
    });

    order.dispatchDomainEvents();

    return order;
  }
}
