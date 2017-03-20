export class ContactInfo {
  public contact: any;
  constructor(public type: string, contactJSON: string,) {
    this.contact = JSON.parse(contactJSON);
  };
}