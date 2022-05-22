import { BaseModel, RegexAndMsg } from "react-mui-validation";

export default class AddressModel extends BaseModel {
 static required = ["firstName", "lastName", 'email', 'address1', 'address2', 'city', 'zip', 'country'];
  // static required = {
  //   firstName: "First Name is required!!",
  //   lastName: "Last Name is required!!",
  //   email: '이메일은 필수 값입니다.'
  // };


 static min = { orderCnt: 3 };
  // static min = { orderCnt: new NumberAndString(10, 'minimum value is 10!!') };

 static max = { orderCnt: 30 };
  // static max = { orderCnt: new NumberAndString(10, 'minimum value is 10!!') };

 static same = { email: ['email2'] };
  // static same = { city: {state: 'city and state and country being same!', country: 'city and state and country being same!'} };


  // static regex = { email : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i}
 static regex = { email : new RegexAndMsg(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, 'You must enter email address!')}

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
