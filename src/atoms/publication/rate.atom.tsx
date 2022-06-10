import { StarIcon } from "../../icons";
import { InteractionBoxDescriptionRateStyles } from "../../styles";

interface RateProps {
  rate: number;
}

export function Rate({rate}: RateProps) {
  const filled: boolean[] = [];
  for (let i = 0; i < 5; i++)filled.push(i < rate);
  
  return (
    <div style={InteractionBoxDescriptionRateStyles}>
      {
        filled.map((fill, index) => (<StarIcon filled={fill} key={index}/>))
      }
    </div>
  );
}