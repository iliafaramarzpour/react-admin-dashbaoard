import React, { createElement } from "react";
import * as lucideIcons from "lucide-react";
import PropTypes from "prop-types";

function Lucide(props) {
  try {
    const { icon, className, ...computedProps } = props;
    if (lucideIcons[icon] !== undefined) {
      return createElement(lucideIcons[icon], {
        ...computedProps,
        className: `lucide ${className}`,
      });
    } else {
      throw props.icon;
    }
  } catch (error) {
    throw `Lucid Icon ${props.icon} not found.`;
  }
}

Lucide.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
};

Lucide.defaultProps = {
  icon: "",
  className: "",
};

export default Lucide;
