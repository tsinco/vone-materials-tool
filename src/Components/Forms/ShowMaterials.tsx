import { db } from "../Authentication/Firebase";
import { useState } from "react";

const ShowMaterials: React.FC = () => {
  const [data, setData] = useState("");
  const VoneCollection = db.collection("Vone");

  // docRef.get().then((querySnapshot) => {
  //   querySnapshot.docs.forEach((result) => {
  //     setData(data => [...data, result.data()]);
  //   });

  // VoneCollection.get().then((querySnapshot) => {
  //   querySnapshot.forEach((result) => {
  //     setData(result.data()["name"]);
  //     console.log(result.data()["name"]);
  //   });
  // });
  return (
    <div>
      <ul>
        {VoneCollection.get().then((querySnapshot) => {
          querySnapshot.forEach((result) => {
            return (
              <a key={result.id}>
                <div>{result.data()["name"]}</div>
              </a>
            );
            // setData(result.data()["name"]);
            // console.log(result.data()["name"]);
          });
        })}
      </ul>
    </div>
  );
};

export default ShowMaterials;
//https://www.youtube.com/watch?v=qA9L3_cK9Z0
// https://medium.com/firebase-tips-tricks/how-to-use-cloud-firestore-in-flutter-9ea80593ca40
