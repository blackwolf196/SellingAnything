import siteConfig from '../../config/site.config';
import { apiGet } from '../../api';

const { apiUrl } = siteConfig;

const apiLink = {
  danhsachpokemon: apiUrl + 'pokemon/'
};

export default {
  DanhSachPokemon: (param) => {
    return apiGet(apiLink.danhsachpokemon, { ...param });
  }
};
