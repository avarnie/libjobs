import React, {useState, useEffect} from "react"
import { collection, getDocs} from "firebase/firestore";
import { FirestoreDB } from "../db/firebase";
import Navbar from "./navbar";

export default function PastJob() {

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
            <Navbar />
            <>
            <div className="joblist" class="mx-7 p-3">
            {
                listing.map(listing =>
                    <>
                <h3> <a href="https://www.emansion.gov.lr/doc/Specific_Procurement_Notice_For%20%20SHS.pdf" class="font-sans">{listing.companyname6}-{listing.jobtitle6}</a></h3>
                <h3> <a href="https://www.emansion.gov.lr/doc/Finance%20Clerk%20-GIZ%20Project.pdf" class="font-sans">{listing.companyname7}-{listing.jobtitle7}</a></h3>
                <h3> <a href="https://www.emansion.gov.lr/doc/EOI_Mid-term_evaluation_Consultant_EJF%20(1)_2.pdf" class="font-sans">{listing.companyname10}-{listing.jobtitle10}</a></h3>
                <h3> <a href="https://liberiahrjobs.com/job/data-analyst-2/" class="font-sans">{listing.companyname11}-{listing.jobtitle11}</a></h3>
                <h3> <a href="https://liberiahrjobs.com/job/sales-tools-supports-and-technical-commercial-agent/" class="font-sans">{listing.companyname12}-{listing.jobtitle12}</a></h3>
                <h3> <a href="https://liberiahrjobs.com/job/human-resource-manager-2/" class="font-sans">{listing.companyname13}-{listing.jobtitle13}</a></h3>
                </>
                )
            }
                </div>
                </>

        </>

    )

}