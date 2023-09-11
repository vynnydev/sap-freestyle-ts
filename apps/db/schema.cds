using { managed, sap } from '@sap/cds/common';

namespace sap.cap.devs;

entity User : managed {
  key ID : Integer;
  firstName : String;
  lastName : String;
  dateOfBirth : String;
  age : Integer;
  phoneNumber: String;
  socialAccounts : String;
  cpf: String(14);
  homeAddress : String;
  mailingAddress : String;
  goals : String;
  jobPosition : String;
}