import { Module } from '@nestjs/common';
import { MusicsController } from './musics.controller';
import { MusicsService } from './musics.service';

@Module({ controllers: [MusicsController], providers: [MusicsService] })
export class MusicsModule {}
