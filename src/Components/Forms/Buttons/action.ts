import { db } from "../index";
import { useEffect, useState } from "react";
import type {
  BlankTemplate,
  UseTemplate,
  UpdateTemplate,
  DeleteTemplate,
} from "./type";
import { stringify } from "querystring";

export function blanktemplate(): BlankTemplate {
  return {};
}
export function usetemplate(inkID: string) {
  const VoneCollection = db.collection("Vone").doc(inkID).collection("values");

  try {
    VoneCollection.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((result) => {
        console.log(result.data());
      });
    });
  } catch {
    console.error();
  }
  return {};
}
export function updatetemplate(inkID: string): UpdateTemplate {
  return { inkID };
}
export function deletetemplate(inkID: string): DeleteTemplate {
  return { inkID };
}
export function Showmaterials() {
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
            console.log(data);
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
