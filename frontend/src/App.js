// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import Addpage from "./pages/Addpage";
// import Editpage from "./pages/Editpage";

// function App() {
//   return (
//     <div style={{ justifyContent: "center", alignItems: "center" }}>
//       <div>
//         <nav>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-evenly",
//             }}
//           >
//             <Link to={"/"} style={{ textDecoration: "none" }}>
//               <h1>Employee Details</h1>
//             </Link>
//             <Link to={"/create"} style={{ textDecoration: "none" }}>
//               <h2>Add employee</h2>
//             </Link>
//           </div>
//         </nav>
//       </div>

//       <div>
//         <Routes>
//           <Route index element={<Homepage />} />
//           <Route path="/create" element={<Addpage />} />
//           <Route path="/edit/:id" element={<Editpage />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Addpage from "./pages/Addpage";
import Editpage from "./pages/Editpage";
import "./styles/App.css"; // Import your custom styles

function App() {
  return (
    <>


      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-links">
            <Link to={"/"} className="nav-link" activeClassName="active">
              <h3>Employee Details</h3>
            </Link>
            <Link to={"/create"} className="nav-link" activeClassName="active">
              <h3>Add Employee</h3>
            </Link>
          </div>
        </nav>
      </div>


      <div className="content">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/create" element={<Addpage />} />
          <Route path="/edit/:id" element={<Editpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
