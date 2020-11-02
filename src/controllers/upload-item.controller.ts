import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {UploadItem} from '../models';
import {UploadItemRepository} from '../repositories';

export class UploadItemController {
  constructor(
    @repository(UploadItemRepository)
    public uploadItemRepository : UploadItemRepository,
  ) {}

  @post('/upload-items', {
    responses: {
      '200': {
        description: 'UploadItem model instance',
        content: {'application/json': {schema: getModelSchemaRef(UploadItem)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UploadItem, {
            title: 'NewUploadItem',
            exclude: ['_id'],
          }),
        },
      },
    })
    uploadItem: Omit<UploadItem, '_id'>,
  ): Promise<UploadItem> {
    return this.uploadItemRepository.create(uploadItem);
  }

  @get('/upload-items/count', {
    responses: {
      '200': {
        description: 'UploadItem model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(UploadItem) where?: Where<UploadItem>,
  ): Promise<Count> {
    return this.uploadItemRepository.count(where);
  }

  @get('/upload-items', {
    responses: {
      '200': {
        description: 'Array of UploadItem model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(UploadItem, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(UploadItem) filter?: Filter<UploadItem>,
  ): Promise<UploadItem[]> {
    return this.uploadItemRepository.find(filter);
  }

  @patch('/upload-items', {
    responses: {
      '200': {
        description: 'UploadItem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UploadItem, {partial: true}),
        },
      },
    })
    uploadItem: UploadItem,
    @param.where(UploadItem) where?: Where<UploadItem>,
  ): Promise<Count> {
    return this.uploadItemRepository.updateAll(uploadItem, where);
  }

  @get('/upload-items/{id}', {
    responses: {
      '200': {
        description: 'UploadItem model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(UploadItem, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UploadItem, {exclude: 'where'}) filter?: FilterExcludingWhere<UploadItem>
  ): Promise<UploadItem> {
    return this.uploadItemRepository.findById(id, filter);
  }

  @patch('/upload-items/{id}', {
    responses: {
      '204': {
        description: 'UploadItem PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UploadItem, {partial: true}),
        },
      },
    })
    uploadItem: UploadItem,
  ): Promise<void> {
    await this.uploadItemRepository.updateById(id, uploadItem);
  }

  @put('/upload-items/{id}', {
    responses: {
      '204': {
        description: 'UploadItem PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() uploadItem: UploadItem,
  ): Promise<void> {
    await this.uploadItemRepository.replaceById(id, uploadItem);
  }

  @del('/upload-items/{id}', {
    responses: {
      '204': {
        description: 'UploadItem DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.uploadItemRepository.deleteById(id);
  }
}
