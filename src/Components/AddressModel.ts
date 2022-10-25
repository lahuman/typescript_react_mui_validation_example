import {
  BaseModel,
  RegexAndMsg,
  NumberAndMsg,
  KeyAndKeyAndMsg,
  KeyAndNumber,
} from "react-mui-validation";

export default class AddressModel extends BaseModel {
  //  static required = ["firstName", "lastName", 'email', 'address1', 'address2', 'city', 'zip', 'country'];
  static required = {
    firstName: "First Name은 필수 값입니다.",
    lastName: "Last Name 은 필수 값입니다.",
    email: "이메일은 필수 값입니다.",
    address1: "주소 1은 필수 값입니다.",
    city: "도시명은 필수 값입니다.",
    zip: "우편번호는 필수 값입니다.",
    country: "국가는 필수 값입니다.",
    dtm: "예약일자를 선택하세요!",
  };

  static minLength = {
    firstName: {
      num: 3,
      msg: "최소 3자 이상 작성해주세요.",
    },
    lastName: {
      num: 3,
      msg: "최소 3자 이상 작성해주세요.",
    },
  };
  static maxLength = {
    firstName: {
      num: 10,
      msg: "최대  10자까지 작성해주세요.",
    },
    lastName: {
      num: 10,
      msg: "최대  10자까지 작성해주세요.",
    },
  };
  // static min = { orderCnt: 3 };
  static min = { orderCnt: new NumberAndMsg(3, "최소 3이상을 가져야합니다.") };

  // static max = { orderCnt: 30 };
  static max = {
    orderCnt: new NumberAndMsg(10, "최대 10이하를 가져야 합니다."),
  };

  // static same = { email: ["email2"] };
  static same = { email: { email2: "이메일과 확인값은 동일해야 합니다." } };
  // static same = { city: {state: 'city and state and country being same!', country: 'city and state and country being same!'} };

  // static regex = { email : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i}
  static regex = {
    email: new RegexAndMsg(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      "이메일 형식으로 입력하세요."
    ),
    dtm: new RegexAndMsg(
      /\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-4]):(0[0-9]|[1-5][0-9])/,
      "예약일자 날짜 형식을 확인하세요."
    ),
  };

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
  dtm: string;

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
      orderCnt,
      dtm,
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
    this.dtm = dtm ?? "";
    this.orderCnt = orderCnt ?? 0;
  }
}
