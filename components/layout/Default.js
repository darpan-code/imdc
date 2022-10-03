import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Header />
          <div className="content-area">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
