import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ItemType extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: number;

  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ItemType>) {
    super(data);
  }
}

export interface ItemTypeRelations {
  // describe navigational properties here
}

export type ItemTypeWithRelations = ItemType & ItemTypeRelations;
