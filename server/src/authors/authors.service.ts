import { Injectable } from '@nestjs/common';
import { TOP_ALBUM } from '../../client';
import { AuthorT } from '../types/app.types';

@Injectable()
export class AuthorsService {
  getTopAlbum(): AuthorT[] {
    return TOP_ALBUM;
  }
}
