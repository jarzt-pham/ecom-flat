import { z } from "zod";
import { OrderStatusEnum } from "../enums/order-status.enum";

export module SchemaValidate {
  export const SchemaCreateOrderItem = z.object({
    orderId: z.string(),
    productId: z.string(),
    quantity: z.number(),
  });

  export const SchemaUpdateOrderItem = z.object({
    quantity: z.number(),
  });

  export const SchemaCreateOrder = z.object({
    customerId: z.string(),
    orderItems: z.array(SchemaCreateOrderItem),
  });

  export const SchemaUpdateOrder = z.object({
    customerId: z.string(),
    orderItems: z.array(SchemaCreateOrderItem),
    status: z.nativeEnum(OrderStatusEnum),
  });
}
