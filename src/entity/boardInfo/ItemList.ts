import type Item from './item';

export default class ItemList {
  public items: Item[] = [];
  constructor(...items: Item[]) {
    items.forEach((item: Item) => {
      this.items.push(item);
    });
  }
}
