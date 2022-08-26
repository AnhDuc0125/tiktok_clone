import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="container">{children}</div>
    </div>
  );
}

export default HeaderOnly;
