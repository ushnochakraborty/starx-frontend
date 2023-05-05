import { Container } from "@mui/material"
import Chart from 'chart.js/auto'
import {useState, useEffect} from "react"
import {Bar} from "react-chartjs-2"
import jsPDF from "jspdf"
import html2canvas from "html2canvas";
import "./Result.css"

function Result (props) {
    const [chartData, setChartData] = useState({datasets: []})
    const [chartOptions, setChartOptions] = useState({})

    const createPDF = async () => {   
        const pdf = new jsPDF("portrait", "pt", "a4"); 
        const info = await html2canvas(document.querySelector("#info"));
        const section1 = await html2canvas(document.querySelector("#section1"));
        const section23 = await html2canvas(document.querySelector("#section23"));
        const img1 = info.toDataURL("image/png");  
        const img2 = section1.toDataURL("image/png")
        const img3 = section23.toDataURL("image/png")
        const imgProperties1 = pdf.getImageProperties(img1);
        const imgProperties2 = pdf.getImageProperties(img2);
        const imgProperties3 = pdf.getImageProperties(img3);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight1 = (imgProperties1.height * pdfWidth) / imgProperties1.width;
        const pdfHeight2 = (imgProperties2.height * pdfWidth) / imgProperties2.width;
        const pdfHeight3 = (imgProperties2.height * pdfWidth) / imgProperties3.width;
        const margins = {
            top: 40,
            bottom: 60,
            left: 40,
            right: 40,
          };
        pdf.addImage(img1, "PNG", margins.left, margins.top, pdfWidth - margins.left - margins.right, pdfHeight1 - margins.top - margins.bottom);
        pdf.addPage()
        pdf.addImage(img2, "PNG", margins.left, margins.top, pdfWidth - margins.left - margins.right, pdfHeight2 - margins.top);
        pdf.addPage()
        pdf.addImage(img3, "PNG", margins.left, margins.top, pdfWidth - margins.left - margins.right, pdfHeight3 - margins.top);
        pdf.save("document.pdf");
    };

    useEffect(() => {
        setChartData({
            labels: ["Disease Knowledge", "Self-management", "Provider Communication"],
            datasets: [
                {
                    labels: "scores",
                    barPercentage: 0.5,
                    barThickness: 40,
                    data: [props.scoreData.score1, props.scoreData.score2, props.scoreData.score3]
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
                    display: false
                },
                title: {
                    display: false,
                    text: 'Chart.js Horizontal Bar Chart'
                }
            },
        })
    }, [])

    return (
        <div>
        <Container maxWidth="sm">
            <div className="Result">
                <head>
                    <title>STARx Survey Report</title>
                </head>
                <body>
                    <div class="info">
                        <header>
                            <h1>STARx Survey Report</h1>
                        </header>
                        <section>
                            <h2>Patient Information</h2>
                            <table>
                                <tr>
                                    <th>UID (*Please remember this ID)</th>
                                    <td>{props.uid}</td>
                                </tr>
                                <tr>
                                    <th>Current Age / Age at Diagnosis</th>
                                    <td>{props.plainData[1].displayValue} / {props.plainData[2].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{props.plainData[4].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>Race</th>
                                    <td>{props.plainData[3].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>Number of Medicines</th>
                                    <td>{props.plainData[5].displayValue}</td>
                                </tr>
                            </table>
                        </section>
                        <section>
                            <h2>Scores</h2>
                            <table>
                                <tr>
                                    <th>Disease Knowledge</th>
                                    <td>{props.scoreData.score1}</td>
                                </tr>
                                <tr>
                                    <th>Self-management</th>
                                    <td>{props.scoreData.score2}</td>
                                </tr>
                                <tr>
                                    <th>Provider Communication</th>
                                    <td>{props.scoreData.score3}</td>
                                </tr>
                                <tr>
                                    <th>Total Score</th>
                                    <td>{props.scoreData.score1+props.scoreData.score2+props.scoreData.score3}</td>
                                </tr>
                            </table>
                            <Bar options={chartOptions} data={chartData}/>
                        </section>
                    </div>
                    <div class="section1">
                        <section>
                            <h2>Section 1 Answers</h2>
                            <table>
                                <tr>
                                    <th>1. {props.plainData[6].data[0].title}</th>
                                    <td>{props.plainData[6].data[0].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>2. {props.plainData[6].data[1].title}</th>
                                    <td>{props.plainData[6].data[1].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>3. {props.plainData[6].data[2].title}</th>
                                    <td>{props.plainData[6].data[2].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>4. {props.plainData[6].data[3].title}</th>
                                    <td>{props.plainData[6].data[3].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>5. {props.plainData[6].data[4].title}</th>
                                    <td>{props.plainData[6].data[4].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>6. {props.plainData[6].data[5].title}</th>
                                    <td>{props.plainData[6].data[5].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>7. {props.plainData[6].data[6].title}</th>
                                    <td>{props.plainData[6].data[6].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>8. {props.plainData[6].data[7].title}</th>
                                    <td>{props.plainData[6].data[7].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>9. {props.plainData[6].data[8].title}</th>
                                    <td>{props.plainData[6].data[8].displayValue}</td>
                                </tr>
                            </table>
                        </section>
                    </div>
                    <div class="section23">
                        <section>
                            <h2>Section 2 Answers</h2>
                            <table>
                                <tr>
                                    <th>10. {props.plainData[7].data[0].title}</th>
                                    <td>{props.plainData[7].data[0].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>11. {props.plainData[7].data[1].title}</th>
                                    <td>{props.plainData[7].data[1].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>12. {props.plainData[7].data[2].title}</th>
                                    <td>{props.plainData[7].data[2].displayValue}</td>
                                </tr>
                            </table>
                        </section>
                        <section>
                            <h2>Section 3 Answers</h2>
                            <table>
                                <tr>
                                    <th>13. {props.plainData[8].data[0].title}</th>
                                    <td>{props.plainData[8].data[0].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>14. {props.plainData[8].data[1].title}</th>
                                    <td>{props.plainData[8].data[1].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>15. {props.plainData[8].data[2].title}</th>
                                    <td>{props.plainData[8].data[2].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>16. {props.plainData[8].data[3].title}</th>
                                    <td>{props.plainData[8].data[3].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>17. {props.plainData[8].data[4].title}</th>
                                    <td>{props.plainData[8].data[4].displayValue}</td>
                                </tr>
                                <tr>
                                    <th>18. {props.plainData[8].data[5].title}</th>
                                    <td>{props.plainData[8].data[5].displayValue}</td>
                                </tr>
                            </table>
                        </section>
                    </div>
                    <div class="pdf-container">
                        <button class="generate-pdf-btn" onClick={createPDF}>
                            Generate PDF
                        </button>
                    </div>
                </body>
            </div>
        </Container>
        </div>
  )
};

export default Result;