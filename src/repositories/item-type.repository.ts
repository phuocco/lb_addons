import {DefaultCrudRepository} from '@loopback/repository';
import {ItemType, ItemTypeRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ItemTypeRepository extends DefaultCrudRepository<
  ItemType,
  typeof ItemType.prototype._id,
  ItemTypeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ItemType, dataSource);
  }
}
