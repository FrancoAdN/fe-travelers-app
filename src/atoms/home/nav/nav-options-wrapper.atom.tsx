import { useState } from "react";
import { NavOptionsEnum } from "../../../enums";
import { CompassIcon, HomeIcon, InteractionsIcon, MessagesIcon, PostIcon } from "../../../icons";
import { NavOptionsWrapperStyles } from "../../../styles";

export function NavOptionsWrapper() {
  const [selected, setSelected] = useState(NavOptionsEnum.Home);
  function changeOption(option: NavOptionsEnum) {
    setSelected(option);
  }

  return (
    <div style={NavOptionsWrapperStyles}>
      <HomeIcon focused={selected === NavOptionsEnum.Home} onClick={() => changeOption(NavOptionsEnum.Home)} />
      <CompassIcon focused={selected === NavOptionsEnum.Explore} onClick={() => changeOption(NavOptionsEnum.Explore)} />
      <PostIcon focused={selected === NavOptionsEnum.NewPost} onClick={() => changeOption(NavOptionsEnum.NewPost)} />
      <InteractionsIcon focused={selected === NavOptionsEnum.Interactions} onClick={() => changeOption(NavOptionsEnum.Interactions)} />
      <MessagesIcon focused={selected === NavOptionsEnum.DirectMessages} onClick={() => changeOption(NavOptionsEnum.DirectMessages)} />
    </div>
  )
}