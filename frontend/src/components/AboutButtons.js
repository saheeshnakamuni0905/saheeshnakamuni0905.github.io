import React from 'react';
import '../design/AboutButtonsDesign.css';

const AboutButton = ({
  //how are we using the button? here i am using the component as a link to another page. default component is button
  as: Component = 'a',
  //content in a
  children,
  //the design of the button - bgcolor, text color
  filled = false,
  //whatever extra props are there ..rest will handle
  ...rest
}) => {
  return (
    <Component
    //if filled is true then it will adopt dir-control--filled design
      className={`dir-control ${filled ? 'dir-control--filled' : ''}`}
      {...rest}
    >
      {children}
      {/* span is used for the sliding effect on the buttons*/}
      <span />
      <span />
      <span />
      <span />
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </Component>
  );
};

export default AboutButton;
