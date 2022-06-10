import { useState } from "react";
import { CommentIcon, LikeIcon, ShareIcon } from "../../icons";
import { InteractionBoxDescriptionTextStyles, InteractionBoxStyles, PublicationCardDescriptionBoxStyles, PublicationCardInteractionBoxStyles, PublicationCardInteractionsStyles } from "../../styles";
import { Rate } from "./rate.atom";

interface InteractionProps {
  children: React.ReactNode
  count?: number;
  interacted: boolean;
  onInteraction: Function
}

export function PublicationInteractionBox() {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [share, setShare] = useState(false)
  
  const onLike = () => {
    setLike(!like);
  }

  const onComment = () => {
    console.log(comment, 'comment');
    setComment(false);
  }

  const onShare = () => {
    console.log(share, 'share');
    setShare(false);
  }

  return (
    <div style={PublicationCardInteractionBoxStyles}>
      <div style={PublicationCardInteractionsStyles}>
        <Interaction count={1500} interacted={like} onInteraction={onLike}>
          <LikeIcon interacted={like}/>
        </Interaction>

        <Interaction count={200} interacted={comment} onInteraction={onComment}>
          <CommentIcon interacted={comment}/>
        </Interaction>

        <Interaction count={undefined} interacted={share} onInteraction={onShare}>
          <ShareIcon interacted={share}/>
        </Interaction>


      </div>
      <div style={PublicationCardDescriptionBoxStyles}>
        <div style={InteractionBoxDescriptionTextStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam libero at deleniti, debitis natus iusto repudiandae adipisci, molestias iure vitae aspernatur repellendus ullam facere. Voluptatibus tenetur temporibus perspiciatis nesciunt.
        </div>
        <Rate rate={4}/>

      </div>

    </div>
  )
}

function Interaction({children, count, interacted, onInteraction}: InteractionProps) {
  return (
    <div style={InteractionBoxStyles(interacted)} onClick={() => onInteraction() }>
      {children}
      {
        count !== undefined ? <div>{count}</div> : null
      }
    </div>
  )

}