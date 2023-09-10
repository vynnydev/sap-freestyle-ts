using {sap.cap.devs as mysap} from '../db/schema';

service CustomerService {
  entity User as projection on mysap.User
}