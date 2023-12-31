import { Injectable } from '@nestjs/common';
import { TOP_ALBUM } from '../../data';
import { AuthorT } from '../types/app.types';

@Injectable()
export class AuthorsService {
  getTopAlbum(): AuthorT[] {
    return TOP_ALBUM;
  }
}
