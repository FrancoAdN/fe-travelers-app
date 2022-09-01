import {
  AFRICA,
  ASIA,
  EUROPE,
  NORTH_AMERICA,
  OCEANIA,
  SOUTH_AMERICA,
} from '../constants/continents.constansts';

export enum ContinentsEnum {
  NorthAmerica = 'northamerica',
  SouthAmerica = 'southamerica',
  Asia = 'asia',
  Africa = 'frica',
  Europe = 'europe',
  Oceania = 'oceania',
  World = 'world',
}

export const ContinentsCountries = {
  [ContinentsEnum.NorthAmerica]: NORTH_AMERICA,
  [ContinentsEnum.SouthAmerica]: SOUTH_AMERICA,
  [ContinentsEnum.Asia]: ASIA,
  [ContinentsEnum.Africa]: AFRICA,
  [ContinentsEnum.Europe]: EUROPE,
  [ContinentsEnum.Oceania]: OCEANIA,
};
