import React from 'react';
import Avatar from '@mui/material/Avatar';
import { TextField, Button, Box } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { db, auth } from '../database/firebase';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { signInAnonymously, signOut } from 'firebase/auth';

const DataRequestForm = ({sendDataToPortal}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const requestsRef = collection(db, "requests");
        await signInAnonymously(auth)
            .then(() => {
                console.log("signed in");
            })
            .catch((err) => {
                console.log(err);
            })
        await addDoc(requestsRef, {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            organization: data.get('organization'),
            patientUid: data.get('uid'),
            description: data.get('description')
        }).catch((err) => {
            console.log(err);
        });
        let list = [];
        const colRef = collection(db, "parentsurveys");
        const q = query(colRef, where('uid', '==', data.get('uid')));
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
            if(doc.exists){
                const data =  doc.data();
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
            } else {
                console.log("UID not found!");
                return;
            }
        })
        sendDataToPortal(list, true);
        signOut(auth).then(() => {
            console.log("Signed out!");
        });
      };

  return (
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
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <InsertChartIcon />
        </Avatar>
      <h2>Data Request Form</h2>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <TextField
          id="name"
          name="name"
          label="Doctor's Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          id="phone"
          name="phone"
          type="phone"
          label="Phone Number"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          id="organization"
          name="organization"
          type="organization"
          label="Organization"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          id="uid"
          name="uid"
          type="uid"
          label="Patient UID"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          id="description"
          name="description"
          label="Purpose of Request"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={5}
          required
        />
        <Button variant="contained" type="submit" sx={{ mt: 2, alignSelf: 'flex-end' }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default DataRequestForm;