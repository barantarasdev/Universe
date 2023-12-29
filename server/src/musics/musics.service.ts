import { Injectable } from '@nestjs/common';
import { MUSICS, RECOMMENDED, TOP_CHART } from 'data';
import * as path from 'path';
import * as mm from 'music-metadata';
import { inspect } from 'util';
import { MusicT, ChartT } from 'src/types/app.types';
import getConvertedImageToBase64 from 'src/utils/convertImageToBase64';
import getFormattedTime from 'src/utils/getFormattedTime';

@Injectable()
export class MusicsService {
  getRecommended(): MusicT[] {
    return RECOMMENDED.map((item) => ({
      ...item,
      thumbnail: getConvertedImageToBase64(item.musicNumber),
    }));
  }

  async getTopChart(): Promise<ChartT[]> {
    const topChart = await Promise.all(
      TOP_CHART.map(async (item) => {
        const musics = await Promise.all(
          item.musics.map(async (musicItem) => {
            const filePath = path.join(
              process.cwd(),
              `data/musics/${musicItem.musicNumber}.mp3`,
            );
            const metadata = await mm.parseFile(filePath);
            const duration = getFormattedTime(
              inspect(metadata.format.duration),
            );
            const thumbnail = getConvertedImageToBase64(musicItem.musicNumber);

            return {
              ...musicItem,
              thumbnail,
              duration,
            };
          }),
        );

        return { ...item, musics };
      }),
    );

    return topChart;
  }

  getMusic(musicNumber: number, res: any): string {
    const filePath = path.join(process.cwd(), `data/musics/${musicNumber}.mp3`);

    return res.sendFile(filePath);
  }

  getMusicCard(musicNumber: number): MusicT | undefined {
    const music = MUSICS.find(
      (music) => music.musicNumber === Number(musicNumber),
    );

    return {
      ...music,
      thumbnail: getConvertedImageToBase64(musicNumber),
    };
  }
}