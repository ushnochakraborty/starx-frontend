import DataPortalHome from "./DataPortalHome";
import Login from "./Login"
import { auth } from "../database/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const DataPortal = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, [])

    return (
        <div className="data-portal">
            {user ? (<DataPortalHome />) : (<Login />)}
        </div>
    )
}

export default DataPortal;