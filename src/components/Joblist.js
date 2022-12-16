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
            <h3> <a href={"https://www.emansion.gov.lr/doc/Application-Developer-nov22.pdf"} class="font-sans">{listing.companyname2}-{listing.jobtitle2}</a></h3>
            <h3> <a href={"https://www.emansion.gov.lr/doc/Office%20Assisant.pdf"} class="font-sans">{listing.companyname3}-{listing.jobtitle3}</a></h3>
            <h3> <a href={"https://www.emansion.gov.lr/doc/Tender%20Announcement%20for%20Construction%20Services%20Roselyn%20Toe%20Massaquoi%20Health%20Centre%20Approved%20Version%20.pdf"} class="font-sans">{listing.companyname4}-{listing.jobtitle4}</a></h3>
            <h3> <a href={"https://www.emansion.gov.lr/doc/Request%20for%20Bid%20SAAS-Extended.pdf"} class="font-sans">{listing.companyname5}-{listing.jobtitle5}</a></h3>
            <h3> <a href={"https://www.emansion.gov.lr/doc/Specific_Procurement_Notice_For%20%20SHS.pdf"} class="font-sans">{listing.companyname6}-{listing.jobtitle6}</a></h3>
            <h3> <a href={"https://www.emansion.gov.lr/doc/Finance%20Clerk%20-GIZ%20Project.pdf"} class="font-sans">{listing.companyname7}-{listing.jobtitle7}</a></h3>
            <h3> <a href={"https://www.emansion.gov.lr/doc/Vacancy_AIFO%20Liberia%20Country%20Administrator_%20Readvertised.pdf"} class="font-sans">{listing.companyname8}-{listing.jobtitle8}</a></h3>
            <h3> <a href={"https://www.emansion.gov.lr/doc/DELTA_Job%20Vacancy%20-Logistician.pdf"} class="font-sans">{listing.companyname9}-{listing.jobtitle9}</a></h3>
            <h3> <a href={"https://www.emansion.gov.lr/doc/EOI_Mid-term_evaluation_Consultant_EJF%20(1)_2.pdf"} class="font-sans">{listing.companyname10}-{listing.jobtitle10}</a></h3>
            <h3> <a href={"https://liberiahrjobs.com/job/data-analyst-2/"} class="font-sans">{listing.companyname11}-{listing.jobtitle11}</a></h3>
            <h3> <a href={"https://liberiahrjobs.com/job/sales-tools-supports-and-technical-commercial-agent/"} class="font-sans">{listing.companyname12}-{listing.jobtitle12}</a></h3>
            <h3> <a href={"https://liberiahrjobs.com/job/human-resource-manager-2/"} class="font-sans">{listing.companyname13}-{listing.jobtitle13}</a></h3>
           </>
          )
            }
          </div>
        </>
  
    )
}