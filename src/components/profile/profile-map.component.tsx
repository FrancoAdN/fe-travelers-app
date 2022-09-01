import { useState } from 'react';
import { Map } from '../../atoms'
import { FlexDirectionEnum } from '../../enums';
import {  ContinentsEnum } from '../../enums/continents.enum';
import { ColdplayMock } from "../../mocks/country-totals.mock";
import { BasicFlexBox, palette } from '../../styles';
import Select, { StylesConfig } from 'react-select';
import CSS from 'csstype';

interface ProfileMapProps {
  username: string;
  selectable: boolean;
  dimension: number;
}

export function ProfileMap({ username, selectable, dimension }: ProfileMapProps) {
  const options = [
    {value: ContinentsEnum.World, label: 'World'},
    {value: ContinentsEnum.NorthAmerica, label: 'North America'},
    {value: ContinentsEnum.SouthAmerica, label: 'South America'},
    {value: ContinentsEnum.Europe, label: 'Europe'},
    {value: ContinentsEnum.Oceania, label: 'Oceania'},
    {value: ContinentsEnum.Africa, label: 'Africa'},
    {value: ContinentsEnum.Asia, label: 'Asia'},
  ]
  const [focus, setFocus] = useState<{ value: ContinentsEnum, label: string}>(options[0]);

  const handleSelectChange = (selectedValue: any) => {
    setFocus(selectedValue);
  }

  const commonStyles = (width: string): CSS.Properties  => ({
    width,
    ...BasicFlexBox(FlexDirectionEnum.Row),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
    marginTop: '5px',
    color: palette.WHITE,
    outline: 'none',
  });

  const customStyles: StylesConfig = {
    option: () => ({
      ...commonStyles('120px'),
      padding: '5px 5px',
      border: `1px solid ${palette.WHITE}`,
      backgroundColor: '#181818'
    }),
    control: () => ({
      marginBottom: '15px',
      ...commonStyles('fit-content'),
      border: `1px solid ${palette.WHITE}`,
    }),
    singleValue: () => ({
      ...commonStyles('120px'),
      marginBottom: '15px',
    }),
    menu: (base) => ({
      ...base,
      width: 'fit-content',
      backgroundColor: '#181818'
    })
  }
  

  return (
    <div style={{
      width: '100%',
      height: 'max-content',
      ...BasicFlexBox(FlexDirectionEnum.Row),
      justifyContent: 'center'
    }}>
      <div style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
      }}>
        <Select options={options} value={focus} onChange={handleSelectChange} isSearchable={false} styles={customStyles} />
        <Map selectable={selectable} countryTotals={ColdplayMock} focus={focus.value} />
      </div>
    </div>

  )
}