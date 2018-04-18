import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon, { names as iconNames, sizes as iconSizes } from "@hig/icon";
import { ThemeContext } from "@hig/themes";

import "./collapse-button.scss";

/** @todo Consider replacing with an IconButton */
export default class CollapseButton extends Component {
  static propTypes = {
    /** Called when element is clicked */
    onClick: PropTypes.func,
    /** Presents the icon in a minimized state: caret pointing down */
    minimized: PropTypes.bool
  }

  static defaultProps = {
    onClick: () => {},
    minimized: false
  }

  render() {
    const { minimized, onClick } = this.props;
    const classes = (themeClass) => cx(
      themeClass,
      "hig__global-nav__side-nav__section__group__module__collapse-button",
      {
        "hig__global-nav__side-nav__section__group__module__collapse-button--collapsed": minimized
      }
    );

    return (
      <ThemeContext.Consumer>
        {({ themeClass }) => (
          /** @todo replace with a semantic HTML tag */
          <div
            className={classes(themeClass)}
            onClick={onClick}
          >
            <Icon name={iconNames.CARET} size={iconSizes.PX_24} />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
