import { relative } from "path";
import React, { useEffect, useState } from "react";
import { db } from "../index";

export function Loadmaterials_Nova() {
  const [data, setData] = useState([""]);
  const VoneCollection = db.collection("Vone");

  useEffect(() => {
    try {
      VoneCollection.get().then((querySnapshot) => {
        querySnapshot.docs.forEach((result) => {
          if (data[0] === "") {
            data[0] = result.data()["Id"];
          } else {
            setData((arr) => [...arr, result.data()["Id"]]);
          }
        });
      });
    } catch {
      console.error();
    }
  }, []);
  return {
    data,
  };
}
// export function GetInkProps(inkID: string) {
//   const [data, setData] = useState([""]);
//   const VoneCollection = db.collection("Vone").doc(inkID);

//   useEffect(() => {
//    VoneCollection.get().then((querySnapshot) => {
//         querySnapshot.data((result) => {
//        result.

//   }, []);
//   return {
//     data,
//   };
// }
