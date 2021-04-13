import { db } from "../index";
import { useEffect, useState } from "react";
import { download, getLatestDatabaseInfo } from "@volterainc/ink-database";
import type { DatabaseInfo } from "./type";
import type {
  BlankTemplate,
  UseTemplate,
  UpdateTemplate,
  DeleteTemplate,
} from "./type";

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
async function getVoneinfo() {
  const releaseurl = `https://api.github.com/repos/VolteraInc/ink-database/releases/latest`;
  try {
    let response = await fetch(releaseurl);
    response = await response.json();
    const data = JSON.parse(JSON.stringify(response));
    const newInfo = {
      eTag: data.id,
      version: data.name,
      url: data.zipball_url,
    };
    require("fs-extra");
    console.log(download(newInfo));
    return newInfo.url;
  } catch (ex) {
    console.error();
  }
}
export function Loadmaterials_Vone() {
  const [data, setData] = useState([""]);
  const url =
    "https://api.github.com/repos/VolteraInc/ink-database/zipball/1.4.22";
  useEffect(() => {
    async function fetchAPI() {
      try {
        let response = await fetch(url);
        response = await response.json();
        const data = JSON.parse(JSON.stringify(response));
        console.log(data);
      } catch (ex) {
        console.error();
      }
    }
    fetchAPI();
  }, []);
  return {
    data,
  };
}
