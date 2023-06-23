import Address from "./address.entity";

export default class Medic {
    id: number;
    name: string;
    cpf: string;
    crf: string;
    phone: string;
    address_id: number;
    address: Address;
}