function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Check if the cookie name matches
        if (cookie.startsWith(name + '=')) {
            // Extract and return the cookie value
            return cookie.substring(name.length + 1);
        }
    }
    // Return null if cookie not found
    return null;
}


const getPeriodicalReports = async (type, dateFrom, dateTo) => {
    let cookie = getCookie("access_token")
    
    try {
        let report = await fetch(process.env.REACT_APP_API_URL + "/zreport/periodical/pdf", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + cookie,
                "responseType": "blob"
            },
            body: JSON.stringify({ type, datefrom: dateFrom, dateto: dateTo })
        })

        if(report.ok) {
            const blob = await report.blob();
            
            return blob;
        }
    } catch(error) {
        throw error;
    }
}


const generateZ = async () => {
    let cookie = getCookie("access_token")
  
    try {
        let report = await fetch(process.env.REACT_APP_API_URL + "/zreport/pdf", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + cookie,
                "responseType": "blob"
            }
        });

        if (report.ok) {
            const blob = await report.blob();
           
            return blob; 
        }
    } catch(error) {

        throw error;
    }
}

const generateX = async () => {
    let cookie = getCookie("access_token")
   
    try {
        let report = await fetch(process.env.REACT_APP_API_URL + "/xreport/pdf", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + cookie,
                "responseType": "blob"
            }
        });

        if (report.ok) {
            const blob = await report.blob();
            
            return blob; 
        }
    } catch(error) {
     
        throw error;
    }
}


export const reportApi = {
    getPeriodicalReports,
    generateZ,
    generateX
}