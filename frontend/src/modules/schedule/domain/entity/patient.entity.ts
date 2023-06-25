import Address from './address.entity';

export default class Patient {
  id: number;
  name: string;
  phone: string;
  email?: string;
  gender: string;
  birthdate: Date;
  cpf: string;
  address_id?: number;
  address?: Address;
}
