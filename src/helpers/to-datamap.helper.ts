import { CountryTotalsDto } from '../dtos';
import { DataMap } from '../types';

export function toDataMap(countryTotals: CountryTotalsDto[]): DataMap {
  const MAX_MAP_VALUE = 100000;
  const MAX_TOTALS = countryTotals[0].total;
  const MIN_TOTALS = 1;

  const offset = (MIN_TOTALS * MAX_MAP_VALUE) / MAX_TOTALS;

  return countryTotals.reduce((acc, curr) => {
    const value =
      curr.total === MAX_TOTALS
        ? MAX_MAP_VALUE
        : (curr.total * MAX_MAP_VALUE) / MAX_TOTALS - offset;
    acc = {
      ...acc,
      [curr.countryCode]: value,
    };
    return acc;
  }, {});
}
