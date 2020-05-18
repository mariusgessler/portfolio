import React from 'react';
import PropTypes from 'prop-types';

const Tools = (props) => {
  const { tools } = props;

  return (
    <div className="tool-logos__wrapper">
      {tools.map((tool) => <img src={require(`../../assets/icons/${tool}.svg`)} alt={`${tool}`} className="tool-logos__item" />)}
    </div>
  );
};

Tools.defaultProps = {
  tools: PropTypes.arrayOf(PropTypes.string),
};

Tools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.string),
};

export default Tools;
