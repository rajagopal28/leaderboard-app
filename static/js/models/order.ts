import {Product} from './product';
import {User} from './user';
import {Promotion} from './promotion';

export interface Order {
  id: number,
  product: Product,
  user: User,
  quantity: number,
  promotion: Promotion,
  createdTS: Date,
  lastUpdateTS: Date
}
