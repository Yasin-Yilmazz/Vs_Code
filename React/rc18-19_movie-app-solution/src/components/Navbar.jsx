import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  // const currentUser = { displayName: "yase" };
  const currentUser = "";
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>Movie Ocean</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0 text-capitalize">
                  Welcome {currentUser.displayName}{" "}
                  <button className="btn ms-2 btn-outline-light">
                    Log Out
                  </button>
                </h5>
              </>
            ) : (
              <>
                <button
                  className="btn ms-2 btn-outline-success"
                  onClick={() => navigate("login")}
                >
                  Log In
                </button>
                <button
                  className="btn ms-2 btn-outline-danger"
                  onClick={() => navigate("register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
