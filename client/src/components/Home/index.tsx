import {Suspense, memo} from 'react';
import MusicsService from 'src/services/musicsService';
import AuthorsService from 'src/services/AuthorsService';
import Recommended from 'src/components/Recommended';
import Charts from 'src/components/Charts';
import Album from 'src/components/Album';
import {AuthorT, ChartT, MusicT} from 'src/types';
import Container from 'src/components/Home/styles';
import Loading from 'src/app/loading';

export async function getRecommended(): Promise<MusicT[]> {
  const recommended = await MusicsService.getRecommended();
  return recommended;
}

export async function getTopChart(): Promise<ChartT[]> {
  const topChart = await MusicsService.getTopChart();
  return topChart;
}

export async function getAlbum(): Promise<AuthorT[]> {
  const topAlbum = await AuthorsService.getAlbum();
  return topAlbum;
}

async function Main(): Promise<JSX.Element> {
  const [recommended, charts, album] = await Promise.all([
    getRecommended(),
    getTopChart(),
    getAlbum(),
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Recommended recommended={recommended} />

        <Charts charts={charts} />

        <Album album={album} />
      </Container>
    </Suspense>
  );
}
export default memo(Main);
