import BaseModel, { RegexAndMsg } from "../valid/BaseModel";

export class PaymentModel extends BaseModel {
  protected static _required = ["cardName", "cardNumber", "expDate", "cvv"];

  protected static _regex = {
    cardNumber: new RegexAndMsg(
      /(5[1-5]\d{14})|(4\d{12})(\d{3}?)|3[47]\d{13}|(6011\d{12})/i,
      "wrong card number"
    ),
    cvv: new RegexAndMsg(
      /^[0-9]{3,4}$/i,
      "Last three digits on signature strip"
    ),
  };

  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;

  constructor(data: Partial<PaymentModel>) {
    super();
    const { cardName, cardNumber, expDate, cvv } = data;
    this.cardName = cardName ?? "";
    this.cardNumber = cardNumber ?? "";
    this.expDate = expDate ?? "";
    this.cvv = cvv ?? "";
  }
}
