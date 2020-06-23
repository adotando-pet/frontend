import React from 'react';

import Header from './header';

const Layout = ({ children, title }) => {
  return (
    <div style={{ margin: `0 2rem` }}>
      {title && <Header title={title} />}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: `1.45rem`,
        }}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
