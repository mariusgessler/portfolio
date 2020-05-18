import React from 'react';
import PropTypes from 'prop-types';
import Links from './nanos/links';
import keyProvider from '../utilis/helpers';

const WorkItem = (props) => {
  const { item } = props;

  return (
    <div className="col col-xs-12 col-md-3">
      <div className="section--work__item">
        <a href={`${item.links[0].link}`} rel="noreferrer noopener" target="_blank">
          <h3 className ="caption">{item.title}</h3>
          <div className="img__wrapper fade-in">
            <img src={require(`../assets/illustrations/${item.illustration}.svg`)} alt={`${item.illustration}`} />
          </div>
          <div className="description text__wrapper">
            <p className="description">{item.description}</p>
          </div>
          <Links a={false} key={keyProvider()} links={item.links} />
        </a>
      </div>
    </div>
  );
};

WorkItem.defaultProps = {
  item: PropTypes.objectOf(Object),
};

WorkItem.propTypes = {
  item: PropTypes.objectOf(Object),
};

export default WorkItem;
