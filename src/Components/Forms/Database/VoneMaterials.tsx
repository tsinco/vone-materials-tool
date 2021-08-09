import { useEffect, useState } from "react";
import { standardOrder, Ink } from "@volterainc/utils-ink";
import { Spinner } from "@volterainc/ui-core";
async function fetchInk(inkAddress: string) {
  try {
    let response = await fetch(inkAddress);
    const dbObj = await response.json();
    return dbObj;
  } catch {
    console.error();
  }
}

export function FetchMaterials_Vone() {
  const [data, setData] = useState([]);
  // const inkurl =
  //   " https://api.github.com/repos/VolteraInc/ink-database/contents/inks";
  // const pasteurl =
  //   " https://api.github.com/repos/VolteraInc/ink-database/contents/pastes";
  let inkObj: any = [];

  useEffect(() => {
    async function fetchAPI() {
      const inkurl =
        " https://api.github.com/repos/VolteraInc/ink-database/contents/inks";
      try {
        let response = await fetch(inkurl);
        const dbObj = await response.json();
        for (let x = 0; x < dbObj.length; x++) {
          inkObj.push(await fetchInk(dbObj[x].download_url));
        }
        setData(inkObj);
      } catch {
        console.error();
      }
    }

    fetchAPI();
  }, []);
  return data;
}

const DisplayMaterials = ({ parentCallback }: any) => {
  const data = FetchMaterials_Vone();
  console.log(data);
  return (
    <ul>
      {data.length === 0 ? (
        <Spinner label="loading materials" />
      ) : (
        <div className="list-inks">
          {standardOrder(data)
            .slice(0, 2)
            .map((typeInks) => {
              const type = typeInks[0].type;
              return (
                <div key={type} className="ink-selection-list">
                  <div className="type">
                    <h4>{type}</h4>
                  </div>
                  {typeInks.slice(0, 5).map((inks) => {
                    return (
                      <a
                        key={inks.id}
                        className="row"
                        onClick={() => parentCallback(inks.name)}
                      >
                        <div id="name">{inks.name}</div>
                      </a>
                    );
                  })}
                </div>
              );
            })}
        </div>
      )}
    </ul>
  );
};
export default DisplayMaterials;
