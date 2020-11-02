import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Category} from './category.model';
import {ItemType} from './item-type.model';

@model({settings: {strict: false}})
export class UploadItem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: number;

  @belongsTo(() => Category, {name: 'categoryID'})
  category_id: number;

  @belongsTo(() => ItemType, {name: 'itemID'})
  item_id: number;
  // Define well-known properties here

  @property({
    type: 'number',
    required: true,
  })
  type_id: number;
  @property({
    type: 'string',
    required: true,
  })
  item_name: string;

  @property({
    type: 'string',
    required: true,
  })
  file_url: string;

  @property({
    type: 'string',
    required: true,
  })
  image_url: string;

  @property({
    type: 'string',
    required: true,
  })
  thumb_url: string;

  @property({
    type: 'string',
    required: true,
  })
  author_name: string;

  @property({
    type: 'string',
    required: true,
  })
  version: string;

  @property({
    type: 'string',
  })
  size?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  short_description?: string;

  @property({
    type: 'string',
  })
  html_description?: string;

  @property({
    type: 'number',
  })
  hot_priority?: number;

  @property({
    type: 'number',
  })
  download_count?: number;

  @property({
    type: 'string',
  })
  video_code?: string;

  @property({
    type: 'boolean',
    default: false
  })
  is_verify?: boolean;

  @property({
    type: 'date',
  })
  create_time?: string;


  @property({
    type: 'number',
  })
  price?: number;



  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UploadItem>) {
    super(data);
  }
}

export interface UploadItemRelations {
  // describe navigational properties here
}

export type UploadItemWithRelations = UploadItem & UploadItemRelations;
