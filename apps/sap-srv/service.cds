using {sap.cap.devs as mysap} from '../db/schema';

service UserService {

  @readonly
  entity User as projection on mysap.User {
    * ,    
  } excluding {
    cpf, dateOfBirth, address
  };
}