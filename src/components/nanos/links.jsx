import React from 'react';
import PropTypes from 'prop-types';
import keyProvider from '../../utilis/helpers';

const Links = (props) => {
  const { links, a } = props;

  if (!a) {
    return (
      <div className="links__wrapper">
        {links.map((link) => (
          <div className="links__item" key={keyProvider()}>
            <div className="link__container">
              <img src={require(`../../assets/icons/${link.type}.svg`)} alt={`${link.type}`} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="links__wrapper">
      {links.map((link) => (
        <a href={`${link.link}`} rel="noreferrer noopener" target="_blank" className="links__item" key={keyProvider()}>
          <div className="link__container">
            <img src={require(`../../assets/icons/${link.type}.svg`)} alt={`${link.type}`} />
          </div>
        </a>
      ))}
    </div>
  );
};

Links.defaultProps = {
  a: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object),
};

Links.propTypes = {
  a: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Links;
