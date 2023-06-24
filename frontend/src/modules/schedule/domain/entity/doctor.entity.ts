import Address from './address.entity';

export default class Doctor {
  id: number;
  name: string;
  cpf: string;
  crf: string;
  phone: string;
  address_id?: number;
  image_directory: string;
  address?: Address;
}
