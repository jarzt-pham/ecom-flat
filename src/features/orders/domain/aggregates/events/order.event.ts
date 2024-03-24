import { OrderStatusEnum } from "../enums/order-status.enum";

export enum OrderEventNameEnum {
  CREATED = "order.created",
  UPDATED = "order.updated",
  DELETED = "order.deleted",
}

export type OrderEventType = {
  name: OrderEventNameEnum;
} & (
  | {
      name: OrderEventNameEnum.CREATED;
      meta: {
        id: string;
        userId: string;
      };
    }
  | {
      name: Exclude<OrderEventNameEnum, OrderEventNameEnum.CREATED>;
      meta?: { [key: string]: any };
    }
);
