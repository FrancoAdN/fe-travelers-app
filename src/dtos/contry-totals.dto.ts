export class CountryTotalsDto {
  countryCode: string;
  total: number;

  constructor(dto: Partial<CountryTotalsDto> = {}) {
    Object.assign(this, dto);
  }
}
