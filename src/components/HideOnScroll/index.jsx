import Slide from '@mui/material/Slide';

import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function HideOnScroll(props) {

  const hideTrigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
      {props.children}
    </Slide>
  );

}