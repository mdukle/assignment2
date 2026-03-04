async function getPopulationData() {
    const response = await fetch("https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year")
    const data = await response.json();
    console.log(data.data);

    let arrPopData = data.data;

    arrPopData.sort((a, b) => Number(a.Year) - Number(b.Year));

    const table = document.querySelector('tbody');
    arrPopData.forEach(dataPoint => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${dataPoint.Year}</td>
            <td>${dataPoint.Population.toLocaleString()}</td>
        `;

        table.append(row);

    });
}

(() => {
    getPopulationData()
})();

