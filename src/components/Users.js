import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <nav className="users-nav">
        <Link to="1">User 1</Link>
        <Link to="2">User 2</Link>
        <Link to="3">User 3</Link>
        <Link to="admin">Admin</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Users;
