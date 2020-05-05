import React from 'react';
import { Link } from 'gatsby';
import SEO from '../utilis/seo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not Found" />
    <h1>Not Found</h1>
    <p>
      You can have a look at some of my work
      <Link to="/">here </Link>
      or learn a bit about myself
      <Link to="/about"> here.</Link>
    </p>
  </>
);

export default NotFoundPage;
