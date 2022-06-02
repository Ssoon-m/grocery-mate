export default class Item {
  public id: number;
  public title: string;
  public subTitle: string;
  public writer: string;
  constructor(id: number, title: string, subTitle: string, writer: string) {
    this.id = id;
    this.title = title;
    this.subTitle = subTitle;
    this.writer = writer;
  }
  valid(): boolean {
    return this.title.startsWith('하하');
  }
}
