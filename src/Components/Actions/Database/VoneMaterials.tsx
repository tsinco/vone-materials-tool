import { useEffect, useState } from "react";
import { standardOrder, Ink } from "@volterainc/utils-ink";
import { Spinner } from "@volterainc/ui-core";
import { SelectInkButton } from "@volterainc/ui-ink";
const API = {
  ink: " https://api.github.com/repos/VolteraInc/ink-database/contents/inks",
  paste:
    " https://api.github.com/repos/VolteraInc/ink-database/contents/pastes",
};

//number of ink per type to display
const displayLength = 4;

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
  let inkObj: any = [];

  useEffect(() => {
    async function fetchAPI() {
      try {
        let responseInk = await fetch(API.ink);
        let responsePaste = await fetch(API.paste);
        const dbInk = await responseInk.json();
        const dbPaste = await responsePaste.json();
        for (let x = 0; x < dbInk.length; x++) {
          inkObj.push(await fetchInk(dbInk[x].download_url));
        }
        for (let x = 0; x < dbPaste.length; x++) {
          inkObj.push(await fetchInk(dbPaste[x].download_url));
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
  const [isSelected, setIselected] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const handleOnclick = (selectedInk: any) => {
    parentCallback(selectedInk);
    setIselected(true);
    setIsopen(true);
  }
    
  return (
    <ul>
      {data.length === 0 ? (
        <Spinner label="loading materials" />
      ) : (
        <div className="list-inks">
          {standardOrder(data).map((typeInks) => {
            const type = typeInks[0].type;
            return (
              <div key={type} className="ink-selection-list">
                <div className="type">
                  <h4>{type}</h4>
                </div>
                {typeInks.slice(0, displayLength).map((inks) => {
                  return (
                    // Add Select Ink button
                    <SelectInkButton
                      key={inks.id}
                      ink={new Ink(inks)}
                      disabled={false}
                      checked={isSelected}
                      indicator={"check"}
                      onClick={() => handleOnclick(inks)}
                    />
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
