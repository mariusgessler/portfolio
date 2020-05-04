import React from 'react';
import PropTypes from 'prop-types';

const Links = (props) => {
  const { links } = props;

  return (
    <div className="links">
      {links.map((link) => (
        <a href={`${link.link}`} rel="noreferrer noopener" target="_blank">
          <img src={require(`../../assets/icons/${link.type}.svg`)} alt={`${link.type}`} />
        </a>
      ))}
    </div>
  );
};

Links.defaultProps = {
  links: PropTypes.arrayOf(PropTypes.object),
};

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Links;