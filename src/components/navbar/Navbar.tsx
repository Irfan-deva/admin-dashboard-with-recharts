import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
        <span>ADMIN UI</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>9</span>
        </div>
        <div className="user">
          <img src="/user.jpeg" alt="" />
          <span>Irfan Deva</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  );
};
export default Navbar;
