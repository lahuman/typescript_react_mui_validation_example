import BaseModel, { NumberAndMsg, RegexAndMsg } from "../valid/BaseModel";

export default class AddressModel extends BaseModel {
  protected static _required = ["firstName", "lastName", 'email', 'address1', 'address2', 'city', 'zip', 'country'];
  // protected static _required = {
  //   firstName: "First Name is required!!",
  //   lastName: "Last Name is required!!",
  // };


  protected static _min = { orderCnt: 3 };
  // protected static _min = { orderCnt: new NumberAndString(10, 'minimum value is 10!!') };

  protected static _max = { orderCnt: 30 };
  // protected static _max = { orderCnt: new NumberAndString(10, 'minimum value is 10!!') };

  protected static _same = { email: ['email2'] };
  // protected static _same = { city: {state: 'city and state and country being same!', country: 'city and state and country being same!'} };


  // protected static _regex = { email : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i}
  protected static _regex = { email : new RegexAndMsg(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, 'You must enter email address!')}

  firstName: string;
  lastName: string;
  email: string;
  email2: string;

  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  orderCnt: number;

  constructor(data: Partial<AddressModel>) {
    super();

    const {
      firstName,
      lastName,
      email,
      email2,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      orderCnt
    } = data;

    this.firstName = firstName ?? "";
    this.lastName = lastName ?? "";
    this.email = email ?? "";
    this.email2 = email2 ?? "";
    this.address1 = address1 ?? "";
    this.address2 = address2 ?? "";
    this.city = city ?? "";
    this.state = state ?? "";
    this.zip = zip ?? "";
    this.country = country ?? "";
    this.orderCnt = orderCnt ?? 0;
  }
}
