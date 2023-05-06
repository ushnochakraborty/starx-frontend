import { useState } from "react";
import { db } from "../database/firebase";
import { CSVLink } from "react-csv"
import { query, collection, getDocs, where } from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { auth } from "../database/firebase";
import { TextField, Button, Box } from '@mui/material';

const DataPortalHome = () => {
    const [data, setData] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    
    const getData = async () => {
        let list = [];
        SetIsLoading(true);
        const q = query(collection(db, "parentsurveys"));
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
          const data = doc.data();
          list.push({
            uid: data.uid,
            age: data.age,
            age_diag: data.age_diag,
            gender: data.gender,
            race: data.race,
            meds: data.meds,
            q1: data.q1,
            q2: data.q2,
            q3: data.q3,
            q4: data.q4,
            q5: data.q5,
            q6: data.q6,
            q7: data.q7,
            q8: data.q8,
            q9: data.q9,
            q10: data.q10,
            q11: data.q11,
            q12: data.q12,
            q13: data.q13,
            q14: data.q14,
            q15: data.q15,
            q16: data.q16,
            q17: data.q17,
            q18: data.q18,
            score_sec1: data.score_sec1,
            score_sec2: data.score_sec2,
            score_sec3: data.score_sec3,
            score_total: data.score_total
          })  
        })
        setData(list);
        SetIsLoading(false);
    }

    const handleLogout = () => {
        try {
            auth.signOut();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    borderRadius: '5px',
                    maxWidth: '500px',
                    margin: '0 auto',
                    marginTop: 3,
                    marginBottom: 3,
                    bgcolor: 'background.paper',
                }}
                >
                <h2>Press download to get all data</h2>
                <Button sx={{ mt: 2, alignSelf: 'flex-center' }}>
                    <CSVLink data={data} fileanme={"data.csv"} onClick={getData}>
                        {isLoading ? 'Loading csv...' : 'Download'}
                    </CSVLink>
                </Button>
                <Button onClick={handleLogout} sx={{ mt: 2, alignSelf: 'flex-center' }} marginTop={3}>
                    Log Out
                </Button>
            </Box>
        </div>
    )
}

export default DataPortalHome;