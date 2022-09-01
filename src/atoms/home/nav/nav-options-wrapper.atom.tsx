import { useContext, useState } from "react";
import { useNavigate } from 'react-router';
import { UserContext } from "../../../context";
import { NavOptionsEnum } from "../../../enums";
import { CompassIcon, HomeIcon, InteractionsIcon, MessagesIcon, PostIcon } from "../../../icons";
import { NavOptionsWrapperStyles } from "../../../styles";
import { ProfileCapsule } from "../../common";


export function NavOptionsWrapper() {
  const [selected, setSelected] = useState(NavOptionsEnum.Home);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  
  function changeOption(option: NavOptionsEnum) {
    setSelected(option);
    navigate(`/${option}`);
  }

  return (
    <div style={NavOptionsWrapperStyles}>
      <HomeIcon focused={selected === NavOptionsEnum.Home} onClick={() => changeOption(NavOptionsEnum.Home)} />
      <CompassIcon focused={selected === NavOptionsEnum.Explore} onClick={() => changeOption(NavOptionsEnum.Explore)} />
      <PostIcon focused={selected === NavOptionsEnum.NewPost} onClick={() => changeOption(NavOptionsEnum.NewPost)} />
      <InteractionsIcon focused={selected === NavOptionsEnum.Interactions} onClick={() => changeOption(NavOptionsEnum.Interactions)} />
      <MessagesIcon focused={selected === NavOptionsEnum.DirectMessages} onClick={() => changeOption(NavOptionsEnum.DirectMessages)} />
      <ProfileCapsule dimension="26px" profilePhoto={user.avatar} onClick={() => { navigate(`/profile/${user.username}`)}}/>
    </div>
  )
}