import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { MusicsService } from './musics.service';
import { MusicT, ChartT } from 'src/types/app.types';

@Controller()
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Get('/recommended')
  getRecommended(): MusicT[] {
    return this.musicsService.getRecommended();
  }

  @Get('/topChart')
  async getTopChart(): Promise<ChartT[]> {
    return await this.musicsService.getTopChart();
  }

  @Get('/musicCard/:musicId')
  getMusicCard(@Param('musicId') musicId: number): MusicT | undefined {
    return this.musicsService.getMusicCard(musicId);
  }

  @Get('/music/:musicId')
  getMusic(@Param('musicId') musicId: number, @Res() res: Response): string {
    return this.musicsService.getMusic(musicId, res);
  }
}
