export interface Promotion {
  id: number,
  promotionName: string,
  promotionCode: string,
  discount: number,
  appliedOnLevel: string,
  boardType: string,
  createdTS: Date,
  lastUpdateTS: Date
}
