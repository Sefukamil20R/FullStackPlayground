import React, { useState, useEffect } from 'react';
import footerLinksData from './FooterLinksData'; // Importing data for footer links

const FooterLinks = () => {
  // State to manage window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Update window width state on resize
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Initial check of window size on component mount
    handleResize();

    // Clean up event listener to avoid memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to toggle links display
  const toggleLinks = (event) => {
    // Check window width to determine whether to toggle links
    if (windowWidth <= 768) {
      const ul = event.target.parentNode.querySelector('ul');
      // Toggle display style of links
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
      // Toggle 'expanded' class to indicate link visibility
      event.target.classList.toggle('expanded');
    }
  };

  // Rendering the component
  return (
    <div className="footer-links-wrapper row">
      {/* Map through sections in footerLinksData */}
      {footerLinksData?.map((section, index) => (
        <div key={index} className={`links-wrapper-${index + 1} col-sm-12 col-md`}>
          {/* Render section title if it exists */}
          {section.title && (
            <h3 onClick={(e) => {
              toggleLinks(e);
            }}>
              {section.title}
            </h3>
          )}
          {/* Map through columns in each section */}
          {section.columns?.map((column, columnIndex) => (
            <div key={columnIndex}>
              {/* Render column title if it exists */}
              {column.title && (
                <h3 onClick={(e) => {
                  toggleLinks(e);
                }}>
                  {column.title}
                </h3>
              )}
              {/* Render links within each column */}
              <ul style={{ display: windowWidth <= 768 ? 'none' : 'block' }}>
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {/* Render link */}
                    <a href={link.url}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
