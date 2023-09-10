using { managed, sap } from '@sap/cds/common';

namespace sap.cap.devs;

entity User : managed {
  key ID : Integer;
  firstName : String;
  lastName : String;
  dateOfBirth : String;
  age  : Integer;
  cpf: String(14);
  address : String;
}