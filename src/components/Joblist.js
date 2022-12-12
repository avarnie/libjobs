import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { collection, getDocs} from "firebase/firestore";
import { FirestoreDB } from "../db/firebase";


export default function Joblist(){
    const [listing, setlisting] = useState([]);

  function createDate (secs) {
    const date = new Date (secs * 1000);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  } 

  useEffect(() => {
    return async () => {
      const querySnapshot = await getDocs(collection(FirestoreDB, "listing"));
      setlisting(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      console.log(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
    createDate(1669219200);
    };
  }, []);
    return (
        <>
        <div class="mx-7  bg-slate-300 ">
            {
                listing.map(listing =>
        <ol>
            <li><Link href={"#"} class="font-sans">{listing.companyname}-{listing.jobtitle}</Link></li>
            <li><Link href={"#"} class="font-sans">{listing.companyname}-{listing.jobtitle}</Link></li>
        </ol>
          )
            }
          </div>
        </>
  
    )
}