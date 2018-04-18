import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon, { names as iconNames, sizes as iconSizes } from "@hig/icon";
import { ThemeContext } from "@hig/themes";

import "./submodule.scss";

export default class Submodule extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    onHover: PropTypes.func,
    title: PropTypes.string,
    link: PropTypes.string,
    target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  }

  _renderExternalLinkIcon = () => {
    return this.props.target === "_blank" && (
      <Icon name={iconNames.EXTERNAL_LINK} size={iconSizes.PX_16} />
    );
  }

  render() {
    const { active, title, link, onClick, onHover, target } = this.props;

    const classes = (themeClass) => cx(
      themeClass,
      "hig__global-nav__side-nav__section__group__module__submodule",
      {
        "hig__global-nav__side-nav__section__group__module__submodule--active": active
      }
    );

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          <a
          className={classes(themeClass)}
          href={link}
          target={target}
          onClick={onClick}
          onHover={onHover}
        >
          {title}
          { this._renderExternalLinkIcon() }
        </a>
        )}
      </ThemeContext.Consumer>
    );
  }
}
