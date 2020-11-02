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
  Category,
} from '../models';
import {UploadItemRepository} from '../repositories';

export class UploadItemCategoryController {
  constructor(
    @repository(UploadItemRepository)
    public uploadItemRepository: UploadItemRepository,
  ) { }

  @get('/upload-items/{id}/category', {
    responses: {
      '200': {
        description: 'Category belonging to UploadItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Category)},
          },
        },
      },
    },
  })
  async getCategory(
    @param.path.number('id') id: typeof UploadItem.prototype._id,
  ): Promise<Category> {
    return this.uploadItemRepository.categoryID(id);
  }
}
