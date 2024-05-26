
const getPeriodicalReports = async (type, dateFrom, dateTo) => {
    
    try {
        let report = await fetch(process.env.REACT_APP_API_URL + "/zreport/periodical/pdf", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("access_token")}`,
                "responseType": "blob"
            },
            body: JSON.stringify({ type, datefrom: dateFrom, dateto: dateTo })
        })

        if(report.ok) {
            const blob = await report.blob();
            console.log(blob)
            return blob;
        }
    } catch(error) {
        console.log(error)
    }
}


const generateZ = async () => {
    try {
        let report = await fetch(process.env.REACT_APP_API_URL + "/zreport/pdf", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("access_token")}`,
                "responseType": "blob"
            }
        });

        if (report.ok) {
            const blob = await report.blob();
            console.log(blob)
            return blob; 
        }
    } catch(error) {
        console.log(error)
    }
}

const generateX = async () => {
    try {
        let report = await fetch(process.env.REACT_APP_API_URL + "/xreport/pdf", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("access_token")}`,
                "responseType": "blob"
            }
        });

        if (report.ok) {
            const blob = await report.blob();
            console.log(blob)
            return blob; 
        }
    } catch(error) {
        console.log(error)
    }
}


export const reportApi = {
    getPeriodicalReports,
    generateZ,
    generateX
}