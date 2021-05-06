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
        const data = await response.json();

        console.log(data);
        for (let x = 0; x < DisplayLength; x++) {
          let name = data[x].name;
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
export function GetInkProps(inkName: String) {
  const downloadurl =
    "https://raw.githubusercontent.com/VolteraInc/ink-database/master/inks/" +
    inkName +
    ".json";
  let props: any;
  async function fetchAPI() {
    try {
      let response = await fetch(downloadurl);
      const data = await response.json();
      props = data;
      console.log(props);
      return props;
    } catch {
      console.error();
    }
  }
  // fetchAPI();
  console.log(fetchAPI());
  // console.log("Fetch API");
  // return props;
}
