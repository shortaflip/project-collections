import { CovidData } from './CovidData'

export interface CovidCountryData {
  country: string;
  countryInfo?: CountryInfo;
  recovered: number;
  todayRecovered: number;
  critical: number;
  continent: string;
  oneCasePerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries?: number;
  vaccinated?: number;
  baseData: CovidData;
}

interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}
