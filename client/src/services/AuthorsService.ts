import requests from 'src/services/apiClient';
import {AuthorT} from 'src/types';

export const AuthorsService = {
  getAlbum: (): Promise<AuthorT[]> => requests.get('topAlbum'),
};

export default AuthorsService;
