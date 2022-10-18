export interface IMockEvent {
  id: number,
  type: string,
  content: string,
}

export interface IMockEvents {
  [key: string]: IMockEvent[]
}

export interface ICreatedEvent {
  date: string | null,
  type: string,
  content: string
}