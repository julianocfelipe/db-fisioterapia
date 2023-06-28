import BrasilAPIConfig from '@/http/brasil_api.config';
import Rest from '@/http/services/Rest';

export default class AddressInformationService extends Rest {
  static resource = 'cep/v2/';

  static http = BrasilAPIConfig;

  static async getAddressInformation(cep: string) {
    return this.build().index({
      url: `${cep}`,
    });
  }
}
