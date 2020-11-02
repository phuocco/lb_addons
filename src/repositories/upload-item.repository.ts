import {DefaultCrudRepository} from '@loopback/repository';
import {UploadItem, UploadItemRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UploadItemRepository extends DefaultCrudRepository<
  UploadItem,
  typeof UploadItem.prototype._id,
  UploadItemRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(UploadItem, dataSource);
  }
}
