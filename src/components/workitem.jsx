import React from 'react';
import PropTypes from 'prop-types';
import Tools from './nanos/tools';
import Links from './nanos/links';

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
        <Links key={item.title} links={item.links} />

        {/* <div className="col col-xs-12 col-sm-4">
          <div className="row between-xs">
            <div className="col-xs-6">
              <Tools key={item.title} tools={item.tools} />
            </div>
            <div className="col-xs-6">
              <Links key={item.title} links={item.links} />
            </div>
          </div>
        </div> */}
              </a>

      </div>

      </div>
  );
};

WorkItem.defaultProps = {
  item: PropTypes.objectOf(PropTypes.array),
};

WorkItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.array),
};

export default WorkItem;
