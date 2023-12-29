export interface AuthorT {
  id: string;
  name: string;
  image: string;
}

export interface MusicT {
  id: string;
  musicNumber: number;
  name: string;
  author: string;
  thumbnail: string;
  duration?: string;
}

export interface ChartT {
  id: string;
  musics: MusicT[];
}
