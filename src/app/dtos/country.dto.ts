import { Status } from "src/enum/status";

export interface CountryDto {
  id: number;
  cca2: string;
  name: string;
  region: string;
  capital: string;
  flags: string;
  population: number;
  status: Status;
}
