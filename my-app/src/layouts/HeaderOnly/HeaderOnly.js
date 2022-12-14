import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="container">{children}</div>
    </div>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;
