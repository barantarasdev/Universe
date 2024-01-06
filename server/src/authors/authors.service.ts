import { Injectable } from '@nestjs/common';
import { TOP_ALBUM } from '../../public';
import { AuthorT } from '../types/app.types';

@Injectable()
export class AuthorsService {
  getTopAlbum(): AuthorT[] {
    return TOP_ALBUM;
  }
}
