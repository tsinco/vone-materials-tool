import { useEffect, useState } from "react";

export function Loadmaterials_Vone() {
  const DisplayLength = 4;
  const [data, setData] = useState([""]);
  const inkurl =
    " https://api.github.com/repos/VolteraInc/ink-database/contents/inks";
  const pasteurl =
    " https://api.github.com/repos/VolteraInc/ink-database/contents/pastes";
  useEffect(() => {
    async function fetchAPI() {
      try {
        let response = await fetch(inkurl);
        response = await response.json();
        const data = JSON.parse(JSON.stringify(response));

        for (let x = 0; x < DisplayLength; x++) {
          let name = data[x].name;
          let downloadurl = data[x].download_url;
          setData((arr) => [...arr, name.replace(".json", "")]);
        }
      } catch {
        console.error();
      }
    }
    fetchAPI();
  }, []);
  return {
    data,
  };
}
export function GetValues(inkName: String) {
  const [data, setData] = useState([""]);
  const downloadurl =
    "https://raw.githubusercontent.com/VolteraInc/ink-database/master/inks/" +
    inkName +
    ".json";
  useEffect(() => {
    async function fetchAPI() {
      try {
        let response = await fetch(downloadurl);
        response = await response.json();
        const data = JSON.parse(JSON.stringify(response));
        setData(data);
        // console.log(data);
      } catch {
        console.error();
      }
    }
    fetchAPI();
  }, []);
  return { data };
}
