import { Photo } from './photo';

export interface User {
  id: number;
  userName: string;
  knownAs: string;
  city: string;
  country: string;
  age: number;
  gender: string;
  created: Date;
  photoUrl: string;
  lastActive: boolean;
  interests?: string;
  lookingFor?: string;
  introduction?: string;
  photos: Photo[];
}
