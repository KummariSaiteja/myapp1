// import React from 'react'
 //import Feeds from "./Feeds";
 //import Post from "./Post";
// import Albums from "./Albums";
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

// export default function App15() {
//   return (
//     <div>
//       <Router>
//         <Link to="/">Feeds</Link> | <Link to="/post">Post</Link> | <Link to="Albums"></Link>
//         <Routes>
//             <Route path="/" index element={<Feeds/>}></Route>
//             <Route path="/post" element={<Post/>}></Route>
//             <Route path="/Albums" element={<Albums/>}></Route>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feeds from "./Feeds";
import Posts from "./Post";
import Comments from './Comments';
import Albums from './Albums';

export default function App15() {
  return (
    <div>
    <Router>
      <Link to="/">Feeds</Link> | <Link to="/post">Post</Link> | <Link to="/Album">Album</Link>| <Link to="/Comments">Comments</Link>
      <Routes>
          <Route path="/" index element={<Feeds/>}></Route>
          <Route path="/post" element={<Posts/>}></Route>
          <Route path="/Albums" element={<Albums/>}></Route>
          <Route path="/Comments" element={<Comments/>}></Route>
      </Routes>
    </Router>
  </div>
  )
}