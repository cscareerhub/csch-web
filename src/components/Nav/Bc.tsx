import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

function cschNames(title) {
  switch(title) {
    case 'event calendar':
      return "Event Calendar"
    case 'blog':
      return "Blog"
    case 'community rules':
      return "Community Rules"
    case 'code of conduct':
      return "Code of Conduct"
    case 'career resources':
      return "Career Resources"
    case 'wiki faq':
      return "Wiki & FAQ"
    case 'information career':
      return "Information & Career"
    case 'links resources':
      return "Links & Resources"
    case 'csch resources':
      return "CSCH Resources"
    case 'csch links':
      return "CSCH Links"
    case 'contact':
      return "Contact"
    default:
      return title
  }
}

const LittleCrumbs = () => {
  return (
    <Breadcrumbs
      transformLabel={(title) => cschNames(title)}
      listClassName={"littlecrumbs"}
      omitRootLabel
    />
  );
};

export default LittleCrumbs;
