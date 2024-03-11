// import { useState, createContext, useContext } from "react";
// import Child1 from "./Child1";
// export const UserContext = createContext();
// export default function App13a() {
//   const [user, setUser] = useState("John");
//   return (
//     <>
//       <UserContext.Provider value={{ user, setUser }}>
//         <h2>Hello {user} from App13 component</h2>
//         <Child1 />
//       </UserContext.Provider>
//     </>
//   );
// }


import { useState, createContext, useContext } from "react";
import Home1 from './Home1';
import Login1 from '.Login1';
import Register from '.Register';
export const UserContext = createContext();
export default function App13a() {
  const [user, setUser] = useState("John");
  const [flag,setFlag]=useState(0);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {!flag?<Login1/>:flag==1?<Home1/>: flag==2?<Register/>:<Login1/>}
      </UserContext.Provider>
    </>
  );
}