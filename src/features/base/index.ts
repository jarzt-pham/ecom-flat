export abstract class Entity {}

export abstract class EntityRoot<EventType> extends Entity {
  private _domainEvents: EventType[] = [];
  private _domainEventEmitter: IDomainEvent<EventType, void> | undefined;

  constructor(domainEventEmitter?: IDomainEvent<EventType, void>) {
    super();
    this._domainEventEmitter = domainEventEmitter;
  }
  get domainEvents(): EventType[] {
    return this._domainEvents;
  }

  addDomainEvents(event: EventType): void {
    this.domainEvents.push(event);
  }
  dispatchDomainEvents(): void {
    if (this.domainEvents.length === 0 || !this._domainEventEmitter) return;

    for (let i = 0; i < this.domainEvents.length; i++) {
      this._domainEventEmitter.emit(this.domainEvents[i]);
      this.removeDomainEventsExecuted();
    }
  }

  removeDomainEventsExecuted(): void {
    this._domainEvents.shift();
  }

  clearDomainEvents(): void {
    this._domainEvents = [];
  }
}

export interface IDomainEvent<Type, Output> {
  emit(event: Type): Output;
}
