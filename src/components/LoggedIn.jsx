
import { NavLink } from "react-router";
// 
function LoggedIn() {


  return (
    <>
      <div>
        <h2>
          Welcome! Click <NavLink to="/recipe">here</NavLink> to browse recipes.
        </h2>
      </div>
    </>
  );
}

export default LoggedIn;
