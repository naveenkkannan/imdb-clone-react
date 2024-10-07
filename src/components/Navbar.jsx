// import React from "react";
// import Logo from "../clapboard.png";

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="flex space-x-32  border  items-center pl-3 py-4  ">
//       <img className="w-[50px]" src={Logo}></img>

//       <Link to="/" className="text-slate-950   ">
//         Movies
//       </Link>
     

//       <Link to="/watchlist" className="text-slate-950 ">
//         Watchlist
//       </Link>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import Logo from "../clapboard.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center border px-4 py-4"> {/* Use justify-between */}
      <img className="w-[50px]" src={Logo} alt="Logo" />

      <div className="flex space-x-8"> {/* Wrap links in a div with space-x */}
        <Link to="/" className="text-slate-950">
          Movies
        </Link>

        <Link to="/watchlist" className="text-slate-950">
          Watchlist
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

