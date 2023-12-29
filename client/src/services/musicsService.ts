import requests from 'src/services/apiClient';
import {ChartT, MusicT} from 'src/types';

const MusicsService = {
  getRecommended: (): Promise<MusicT[]> => requests.get('recommended'),
  getTopChart: (): Promise<ChartT[]> => requests.get('topChart'),
  getMusic: (musicNumber: number): Promise<string> =>
    requests.get(`music/${musicNumber}`),
  getMusicCard: (musicNumber: number): Promise<MusicT> =>
    requests.get(`musicCard/${musicNumber}`),
};

export default MusicsService;
