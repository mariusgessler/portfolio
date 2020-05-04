import React from 'react';
import PropTypes from 'prop-types';

const Tools = (props) => {
  const { tools } = props;

  return (
    <div className="tool-logos">
      {tools.map((tool) => <img src={require(`../../assets/icons/${tool}.svg`)} alt={`${tool}`} />)}
    </div>
  );
};

Tools.defaultProps = {
  tools: PropTypes.arrayOf(PropTypes.array),
};

Tools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.array),
};

export default Tools;
