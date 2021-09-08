import Slide from '@material-ui/core/Slide';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function HideOnScroll(props) {

  const hideTrigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
      {props.children}
    </Slide>
  );

}