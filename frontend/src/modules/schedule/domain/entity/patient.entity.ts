import Address from './address.entity';

export default class Patient {
  id: number;
  name: string;
  phone: string;
  email?: string;
  gender: string;
  birthday: Date;
  cpf: string;
  address_id?: number;
  address?: Address;
}
