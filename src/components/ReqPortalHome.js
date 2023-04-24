import React from 'react';
import { Button, Box } from '@mui/material';
import { CSVLink } from "react-csv"

const ReqPortalHome = ({data}) => {
  if(!data[0]){
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
            <h2>Patient data not found!</h2>
        </Box>
    </div>
    )
  } else {
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
                  <CSVLink data={data} fileanme={"data.csv"}>
                      Download
                  </CSVLink>
              </Button>
          </Box>
      </div>
    );
  }
};

export default ReqPortalHome;
