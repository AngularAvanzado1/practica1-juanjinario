import { Region } from "./region.interface";

export interface Country {
  id: string,
  iso2Code: string,
  name: string,
  region: Region,
  adminregion: any,
  incomeLevel: any,
  lendingType: any,
  capitalCity: string,
  longitude: string,
  latitude: string
 }
