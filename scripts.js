fetch('https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year')
    .then((response) => {
        return response.json();
    })
    .then((users) => console.log(users));

async function logData() {
    const response = await fetch("https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year")
    const data = await response.json();
    console.log(data.data);
}

getUsers().then((data) => console.log(data));