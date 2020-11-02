import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {UploadItem, UploadItemRelations, Category, ItemType} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CategoryRepository} from './category.repository';
import {ItemTypeRepository} from './item-type.repository';

export class UploadItemRepository extends DefaultCrudRepository<
  UploadItem,
  typeof UploadItem.prototype._id,
  UploadItemRelations
> {

  public readonly categoryID: BelongsToAccessor<Category, typeof UploadItem.prototype._id>;

  public readonly itemID: BelongsToAccessor<ItemType, typeof UploadItem.prototype._id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>, @repository.getter('ItemTypeRepository') protected itemTypeRepositoryGetter: Getter<ItemTypeRepository>,
  ) {
    super(UploadItem, dataSource);
    this.itemID = this.createBelongsToAccessorFor('itemID', itemTypeRepositoryGetter,);
    this.registerInclusionResolver('itemID', this.itemID.inclusionResolver);
    this.categoryID = this.createBelongsToAccessorFor('categoryID', categoryRepositoryGetter,);
    this.registerInclusionResolver('categoryID', this.categoryID.inclusionResolver);
  }
}
