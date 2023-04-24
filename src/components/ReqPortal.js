import DataRequestForm from "./RequestForm";
import ReqPortalHome from "./ReqPortalHome";
import { useState } from "react";

const ReqPortal = () => {
    const [data, setData] = useState([]);
    const [formCompleted, setFormCompleted] = useState(false);

    const sendDataToPortal = (data, formCompleted) => {
        setData(data);
        setFormCompleted(formCompleted);
        console.log(data);
        console.log(formCompleted);
    };

    return (
        <div>
            {!formCompleted? (<DataRequestForm sendDataToPortal={sendDataToPortal}/>) : (<ReqPortalHome data={data}/>)}
        </div>
    )
}

export default ReqPortal;