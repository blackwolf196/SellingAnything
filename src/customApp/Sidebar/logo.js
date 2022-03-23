import React from 'react';
import {Link} from 'react-router-dom';
import siteConfig from '../../config/site.config';

export default ({collapsed}) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/trang-chu">
              <i className={siteConfig.siteIcon}/>
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/trang-chu">{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
