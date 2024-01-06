import { Module } from '@nestjs/common';
import { MusicsController } from './musics/musics.controller';
import { MusicsModule } from './musics/musics.module';
import { MusicsService } from './musics/musics.service';
import { AuthorsController } from './authors/authors.controller';
import { AuthorsService } from './authors/authors.service';
import { AuthorsModule } from './authors/authors.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRootAsync({
      useFactory: () => {
        const uploadsPath = join(__dirname, '..', 'public');
        return [
          {
            rootPath: uploadsPath,
            serveRoot: '/public/',
          },
        ];
      },
    }),
    MusicsModule,
    AuthorsModule,
  ],
  controllers: [MusicsController, AuthorsController],
  providers: [MusicsService, AuthorsService],
})
export class AppModule {}
