import React,{useEffect} from "react";
import {useState} from "react";
// import {useState,useEffect} from "react"; we can use this also instead of using 1,2 lines

// export default function App6(){
//     const[count,setCount]=useState(0);
//     console.log("Component loaded");
//     return(
//         <>
//          <button onClick={()=>setCount((prevState)=>prevState+1)}>Click</button>
//          <span>{count}</span>
//         </>
//     );
// }

// export default function App6(){
//     const[runs,setRuns]=useState(0);
//     const[wickets,setWickets]=useState(0);
//     console.log("Component loaded");
//     useEffect(()=>{
//         console.log("Better Luck Next Time")
//     },[wickets]);
//     return(
//         <>
//         <button onClick={()=>setRuns((prevState)=>prevState+1)}>
//             Runs({runs})
//         </button>
//         <button onClick={()=>setWickets((prevState)=>prevState+1)}>
//             Wickets({wickets})
//         </button>

//         </>
//     )
// }

///////////////////////////

// export default function App6(){
//     const [runs,setRuns]=useState(0);
//     const [wickets,setWickets]=useState(0);
//     // console.log("Compound loaded")
//     useEffect(()=>{
//        if(wickets > 0) console.log(`Wickets:${wickets}.Better Luck Next Time!`);
//     },[wickets]);

//     useEffect(()=>{
//         if(runs>1) console.log(`Good Job!Score:${runs}`)
//     },[runs]);

//     return(
//         <>
//         <button onClick={()=>setRuns((prevState)=>prevState + 1)}>
//             Runs({runs})
//         </button>
//         <button onClick={()=>setWickets((prevState)=>prevState + 1)}>
//             Wickets({wickets})
//         </button>
//         </>
//     )

// }


///////////////////////////////////

// export default function App6() {
//   const [count, setCount] = useState(1);
//   console.log(Date());
//   return (
//     <>
//       <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
//       <span>{count}</span>
//       <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
//     </>
//   );
// }
//////////////////

// const complexFunction = () => {
//     console.log("Initializing count");
//     return 5;
//   };
//   export default function App6() {
//     // const [count, setCount] = useState(() => {
//     //   return complexFunction() //runs once
//     // });
//     const [count, setCount] = useState(complexFunction()); //runs on every render
//     return (
//       <>
//         <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
//         <span>{count}</span>
//         <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
//       </>
//     );
//   }
  ///////////////////////////

  //export default function App6() {
    //     const [student, setStudent] = useState({ name: "John", age: 34 });
    //     console.log(Date());
    //     return (
    //       <>
    //         <p>
    //           <input
    //             type="text"
    //             onChange={(e) =>
    //               setStudent((prevState) => ({
    //                 ...prevState,
    //                 ...{ name: e.target.value },
    //               }))
    //             }
    //             placeholder="Enter Name"
    //           ></input>
    //         </p>
    //         <p>
    //           <input
    //             type="text"
    //             onChange={(e) =>
    //               setStudent((prevState) => ({
    //                 ...prevState,
    //                 ...{ age: e.target.value },
    //               }))
    //             }
    //             placeholder="Enter Age"
    //           ></input>
    //         </p>
    //         <span>
    //           {student.name}-{student.age}
    //         </span>
    //       </>
    //     );
    //   }
  ///////////////////////////////////////
  
// export default function App6() {
//     const [student, setStudent] = useState({});
//     const [students, setStudents] = useState([]);
//     const addStudent = () => {
//       setStudents((prevStudents) => [...prevStudents, student]);
//     };
//     return (
//       <>
//         <p>
//           <input
//             type="text"
//             onChange={(e) =>
//               setStudent((prevStudent) => ({
//                 ...prevStudent,
//                 ...{ name: e.target.value },
//               }))
//             }
//             placeholder="Enter Name"
//           ></input>
//         </p>
//         <p>
//           <input
//             type="text"
//             onChange={(e) =>
//               setStudent((prevStudent) => ({
//                 ...prevStudent,
//                 ...{ age: e.target.value },
//               }))
//             }
//             placeholder="Enter Age"
//           ></input>
//         </p>
//         <p>
//           <button onClick={addStudent}>Add Student</button>
//         </p>
//         <div>
//           {students &&
//             students.map((value, index) => (
//               <div key={index}>
//                 {value.name}-{value.age}
//               </div>
//             ))}
//         </div>
//       </>
//     );
//   }
///////////////////////
//export default function App6() {
    //     const [student, setStudent] = useState({});
    //     const [students, setStudents] = useState([]);
    //     const addStudent = () => {
    //       setStudents((prevStudents) => [...prevStudents, student]);
    //     };
    //     const deleteStudent = (name) => {
    //       setStudents(students.filter((e) => e.name !== name));
    //     };
    //     return (
    //       <>
    //         <p>
    //           <input
    //             type="text"
    //             onChange={(e) =>
    //               setStudent((prevStudent) => ({
    //                 ...prevStudent,
    //                 ...{ name: e.target.value },
    //               }))
    //             }
    //             placeholder="Enter Name"
    //           ></input>
    //         </p>
    //         <p>
    //           <input
    //             type="text"
    //             onChange={(e) =>
    //               setStudent((prevStudent) => ({
    //                 ...prevStudent,
    //                 ...{ age: e.target.value },
    //               }))
    //             }
    //             placeholder="Enter Age"
    //           ></input>
    //         </p>
    //         <p>
    //           <button onClick={addStudent}>Add Student</button>
    //         </p>
    //         <div>
    //           {students &&
    //             students.map((value, index) => (
    //               <div key={index}>
    //                 {value.name}-{value.age} -{" "}
    //                 <button onClick={() => deleteStudent(value.name)}>Delete</button>
    //               </div>
    //             ))}
    //         </div>
    //       </>
    //     );
    //   }

    //////////////////
    
    export default function App6() {
            const [student, setStudent] = useState({ name: "", age: "" });
            const [students, setStudents] = useState([]);
            const addStudent = () => {
              setStudents((prevStudents) => [...prevStudents, student]);
            };
            const deleteStudent = (name) => {
              setStudents(students.filter((e) => e.name !== name));
            };
            const editStudent = (value) => {
              setStudent(value);
              deleteStudent(value.name);
            };
            return (
              <>
                <p>
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) =>
                      setStudent((prevStudent) => ({
                        ...prevStudent,
                        ...{ name: e.target.value },
                      }))
                    }
                    placeholder="Enter Name"
                  ></input>
                </p>
                <p>
                  <input
                    type="text"
                    value={student.age}
                    onChange={(e) =>
                      setStudent((prevStudent) => ({
                        ...prevStudent,
                        ...{ age: e.target.value },
                      }))
                    }
                    placeholder="Enter Age"
                  ></input>
                </p>
                <p>
                  <button onClick={addStudent}>Add Student</button>
                </p>
                <div>
                  {students &&
                    students.map((value, index) => (
                      <div key={index}>
                        {value.name}-{value.age} -{" "}
                        <button onClick={() => deleteStudent(value.name)}>Delete</button>
                        <button onClick={() => editStudent(value)}>Edit</button>
                      </div>
                    ))}
                </div>
              </>
            );
          }
        