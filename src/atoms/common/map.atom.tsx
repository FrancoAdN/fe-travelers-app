import { useEffect, useRef } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { palette } from '../../styles';
import { CountryTotalsDto } from '../../dtos';
import { toDataMap } from '../../helpers';
import { ContinentsCountries, ContinentsEnum } from '../../enums/continents.enum';


interface MapProps {
  selectable: boolean;
  countryTotals: CountryTotalsDto[];
  focus: ContinentsEnum;
}



export const Map = ({ selectable, countryTotals, focus }: MapProps) => {

  const ref = useRef<any>(null);
  // const [dataMap, setDataMap] = useState(toDataMap(countryTotals));

  useEffect(() => {

    let focusParams;
    if (focus === ContinentsEnum.World) {
      focusParams = {
        x: 0.5,
        y: 0.5,
        scale: 0.9,
        animate:true
      }
    } else {
      focusParams = {
        regions: ContinentsCountries[focus],
        animate: true,

      }
    }
    ref.current.setFocus(focusParams);
    
  }, [focus]);
  
  const handleClick = (e:any, countryCode:string) => {

    console.log(countryCode, focus);
  };

  return (
    <VectorMap
      mapRef={ref}
      map={worldMill}
      backgroundColor="transparent" //change it to ocean blue: #0077be
      zoomOnScroll={false}
      style={{
        width: '100%',
        height: '100%',
      }}
      focusOn={{
        x: 0.5,
        y: 0.5,
        scale: 10,
      }}
      containerClassName="map"
      zoomAnimate={true}
      onRegionClick={handleClick} //gets the country code
      
      regionStyle={{
        initial: {
          fill: '#e4e4e4',
          fillOpacity: 0.9,
          stroke: 'none',
          strokeWidth: 0,
          strokeOpacity: 0,
        },
        hover: {
          fillOpacity: 0.8,
          cursor: 'pointer',
        },
        selected: {
          fill: '#e4e4e4', //color for the clicked country
        },
      }}
      regionsSelectable={selectable}
      series={{
        regions: [
          {
            attribute: 'fill',
            values: toDataMap(countryTotals), //this is your data
            // @ts-expect-error
            scale: [palette.LIGHT_EMERALD, palette.EMERALD],
            normalizeFunction: 'polynomial',
          },
        ],
      }}
    />
    
  );
};
