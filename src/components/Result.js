import { Container, Grid } from "@mui/material"
import Chart from 'chart.js/auto'
import {useState, useEffect} from "react"
import {Bar} from "react-chartjs-2"

function Result (props) {
    const [chartData, setChartData] = useState({datasets: []})
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["score1", "score2", "score3"],
            datasets: [
                {
                    labels: "scores",
                    data: [props.score1, props.score2, props.score3],
                }
            ],
        })
        setChartOptions({
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart'
                }
            }
        })
    }, [])

    return (
        <Container maxWidth="sm">
            <div>
                <Grid>
                    <h3>Thank you for completing the survey</h3>
                    <h3>Your child's section1 score is {props.score1} for section 1, {props.score2} for section 2, and {props.score3} for section 3</h3>
                </Grid>
                <Grid>
                    <Bar options={chartOptions} data={chartData}/>
                </Grid>
                <Grid>
                <h3>Contact your provider to interpret this score.</h3>
                <h3>For resources on how to improve your skills, visit <a href = "https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/">our resources page</a></h3>
                </Grid>
            </div>
        </Container>
  )
};

export default Result;