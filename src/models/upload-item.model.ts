import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UploadItem extends Entity {
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
  item_id: number;

  @property({
    type: 'number',
    required: true,
  })
  type_id: number;

  @property({
    type: 'number',
    required: true,
  })
  category_id: number;

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

  // Define well-known properties here

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
