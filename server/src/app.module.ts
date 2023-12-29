import { Module } from '@nestjs/common';
import { MusicsController } from './musics/musics.controller';
import { MusicsModule } from './musics/musics.module';
import { MusicsService } from './musics/musics.service';
import { AuthorsController } from './authors/authors.controller';
import { AuthorsService } from './authors/authors.service';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [MusicsModule, AuthorsModule],
  controllers: [MusicsController, AuthorsController],
  providers: [MusicsService, AuthorsService],
})
export class AppModule {}
