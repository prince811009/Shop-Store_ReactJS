import React from 'react';

import './footer.style.scss';

const Footer = () => (
  <div className="footer">
    <div className="links">
      Feel free to contact me!&ensp;&ensp;
      <div className="link">
        <a href="https://github.com/prince811009/">GitHub&ensp;/&ensp;</a>
      </div>
      <div className="link">
        <a href="https://prince811009.github.io/">Blog&ensp;/&ensp;</a>
      </div>
      <div className="link">
        <a href="https://www.linkedin.com/in/chih-jou-huang-778994164/ "> LinkedIn</a> 
      </div>
    </div>
    <div className="copy-right">
      <p>&copy; {new Date().getFullYear()} Copyright :&ensp;Joanne</p>
    </div>
  </div>
);

export default Footer;
