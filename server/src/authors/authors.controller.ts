import { Controller, Get } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorT } from '../types/app.types';

@Controller()
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get('/topAlbum')
  getTopAlbum(): AuthorT[] {
    return this.authorsService.getTopAlbum();
  }
}
