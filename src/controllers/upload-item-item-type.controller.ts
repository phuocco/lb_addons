import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  UploadItem,
  ItemType,
} from '../models';
import {UploadItemRepository} from '../repositories';

export class UploadItemItemTypeController {
  constructor(
    @repository(UploadItemRepository)
    public uploadItemRepository: UploadItemRepository,
  ) { }

  @get('/upload-items/{id}/item-type', {
    responses: {
      '200': {
        description: 'ItemType belonging to UploadItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ItemType)},
          },
        },
      },
    },
  })
  async getItemType(
    @param.path.number('id') id: typeof UploadItem.prototype._id,
  ): Promise<ItemType> {
    return this.uploadItemRepository.itemID(id);
  }
}
