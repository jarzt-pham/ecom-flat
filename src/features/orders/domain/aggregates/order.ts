import { ValidateUtils } from "../../../../utils";
import { EntityRoot, IDomainEvent } from "../../../base";
import { OrderStatusEnum } from "./enums/order-status.enum";
import { OrderEventNameEnum, OrderEventType } from "./events";
import { OrderItem } from "./order-items";
import { SchemaValidate } from "./validates";

export class Order extends EntityRoot<OrderEventType> {
  private _id: string;
  private _userId: string;
  private _items: OrderItem[];
  private _status: OrderStatusEnum;

  constructor(eventEmitter?: IDomainEvent<OrderEventType, void>) {
    super(eventEmitter);
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    this._items = value;
  }

  get status(): OrderStatusEnum {
    return this._status;
  }

  set status(value: OrderStatusEnum) {
    this._status = value;
  }

  async create({
    id,
    userId,
    items,
    status,
  }: {
    id: string;
    userId: string;
    items: OrderItem[];
    status: OrderStatusEnum;
  }): Promise<void> {
    this.id = id;
    this.userId = userId;
    this.items = items;
    this.status = status;

    this.addDomainEvents({
      name: OrderEventNameEnum.CREATED,
      meta: {
        id,
        userId,
      },
    });
  }

  async update({
    items,
    status,
  }: {
    id: string;
    userId: string;
    items: OrderItem[];
    status: OrderStatusEnum;
  }): Promise<void> {
    this.items = items;
    this.status = status;

    this.addDomainEvents({
      name: OrderEventNameEnum.UPDATED,
      meta: {
        id: this.id,
      },
    });
  }

  async delete(): Promise<void> {
    this.addDomainEvents({
      name: OrderEventNameEnum.DELETED,
      meta: { id: this.id },
    });
  }

  async emitDomainEvent(event: any): Promise<void> {
    console.log("emitDomainEvent", event);
  }
}
