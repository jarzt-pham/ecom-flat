import { ValidateUtils } from "../../../../utils";
import { SchemaValidate } from "./validates";

export class OrderItem {
  private _id: string;
  private _orderId: string;
  private _productId: string;
  private _quantity: number;

  constructor() {}

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get orderId(): string {
    return this._orderId;
  }

  set orderId(value: string) {
    this._orderId = value;
  }

  get productId(): string {
    return this._productId;
  }

  set productId(value: string) {
    this._productId = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  async create({
    id,
    orderId,
    productId,
    quantity,
  }: {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
  }): Promise<void> {
    //validate
    await ValidateUtils.validatePlain(SchemaValidate.SchemaCreateOrderItem, {
      orderId,
      productId,
      quantity,
    });

    //set props
    this.id = id;
    this.orderId = orderId;
    this.productId = productId;
    this.quantity = quantity;

    //event
  }

  async update({
    quantity,
  }: {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
  }): Promise<void> {
    //validate
    await ValidateUtils.validatePlain(SchemaValidate.SchemaUpdateOrderItem, {
      quantity,
    });

    this._quantity = quantity;
  }

  async delete(): Promise<void> {}
}
