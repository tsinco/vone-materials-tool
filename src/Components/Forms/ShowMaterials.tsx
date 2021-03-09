import { db } from "../Authentication/Firebase";
import { useEffect, useState } from "react";

//change to function getMaterials
const ShowMaterials: React.FC = () => {
  const [data, setData] = useState([""]);
  const VoneCollection = db.collection("Vone");

  useEffect(() => {
    try {
      VoneCollection.get().then((querySnapshot) => {
        querySnapshot.docs.forEach((result) => {
          setData((arr) => [...arr, JSON.stringify(result.data())]);
          console.log(data);
        });
      });
    } catch {
      console.error();
    }
  }, []);
  return (
    <div>
      <ul>
        {data.map((val) => {
          return (
            <a className="row">
              <div>{val}</div>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowMaterials;
//https://www.youtube.com/watch?v=qA9L3_cK9Z0
// https://medium.com/firebase-tips-tricks/how-to-use-cloud-firestore-in-flutter-9ea80593ca40
