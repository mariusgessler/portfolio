import React from 'react';
import PropTypes from 'prop-types';

const Links = (props) => {
  const { links } = props;

  return (
    <div className="links__wrapper">
      {links.map((link) => (
        <div className="link__container">
          <a href={`${link.link}`} rel="noreferrer noopener" target="_blank" className="links__item">
            <img src={require(`../../assets/icons/${link.type}.svg`)} alt={`${link.type}`} />
          </a>
        </div>
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
