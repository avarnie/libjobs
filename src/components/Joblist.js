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
        <div className="joblist" class="mx-7 p-3">
            {
                listing.map(listing =>
            <>
            <h3> <Link to={"/landesa"} class="font-sans">{listing.companyname}-{listing.jobtitle}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname2}-{listing.jobtitle2}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname3}-{listing.jobtitle3}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname4}-{listing.jobtitle4}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname5}-{listing.jobtitle5}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname6}-{listing.jobtitle6}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname7}-{listing.jobtitle7}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname8}-{listing.jobtitle8}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname9}-{listing.jobtitle9}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname10}-{listing.jobtitle10}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname11}-{listing.jobtitle11}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname12}-{listing.jobtitle12}</Link></h3>
            <h3> <Link href={"/landesa"} class="font-sans">{listing.companyname13}-{listing.jobtitle13}</Link></h3>
           </>
          )
            }
          </div>
        </>
  
    )
}