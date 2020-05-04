import React from 'react';
import PropTypes from 'prop-types';
import Tools from './nanos/tools';
import Links from './nanos/links';

const WorkItem = (props) => {
  const { item } = props;
  return (
    <div className="section--work__item">
      <div className="row center-xs middle-sm around-md">
        <div className="col col-xs-12 col-sm-6 start-sm">
          <div className="img__wrapper fade-in">
            <img src={require(`../assets/illustrations/${item.illustration}.svg`)} alt={`${item.illustration}`} />
          </div>
        </div>
        <div className="col col-xs-12 col-sm-4">
          <div className="description text__wrapper">
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
          </div>
          <div className="row between-xs">
            <div className="col-xs-6">
              <Tools tools={item.tools} />
            </div>
            <div className="col-xs-6">
              <Links links={item.links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkItem.defaultProps = {
  item: PropTypes.arrayOf(PropTypes.object),
};

WorkItem.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object),
};

export default WorkItem;
