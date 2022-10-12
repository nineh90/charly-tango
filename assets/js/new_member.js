const MEMBERLIST = [
    {"date": "18.09.2022",  "callsign": "13CT2233", "name": "Oliver",   "locator": "",          "city": "Neuruppin"}, 
    {"date": "14.09.2022",  "callsign": "13CT3075", "name": "Frank",    "locator": "JO43BK",    "city": "Varel"}, 	
    {"date": "09.08.2022",  "callsign": "13CT2616",	"name": "Normann",	"locator": "", 	        "city": "Eningen"},
    {"date": "14.07.2022",  "callsign": "13CT2869",	"name": "Andreas",	"locator": "", 	        "city": "Fuldatal"},
    {"date": "05.07.2022",  "callsign": "13CT2903",	"name": "Andreas",	"locator": "", 	        "city": "Ursensollen"},
    {"date": "12.06.2022",	"callsign": "13CT1993",	"name": "Steven",	"locator": "",	        "city": "Solingen"},
    {"date": "10.06.2022",	"callsign": "13CT1992",	"name": "Chantal",	"locator": "", 	        "city": "Solingen"},
    {"date": "10.06.2022",	"callsign": "13CT1987",	"name": "Andreas",	"locator": "", 	        "city": "Solingen"},
    {"date": "06.06.2022",	"callsign": "13CT6401",	"name": "Hans",	 	"locator": "",          "city": "Willich"},
    {"date": "24.05.2022",	"callsign": "13CT1881",	"name": "Stephan",	"locator": "", 	        "city": "Bernau"},
    {"date": "17.05.2022",	"callsign": "13CT1969",	"name": "Christian","locator": "",	        "city": "Quickborn"},
    {"date": "16.05.2022",	"callsign": "13CT2109",	"name": "Camillo",	"locator": "", 	        "city": "Erfurt"},
    {"date": "16.05.2022",	"callsign": "35CT1821",	"name": "Thomas",	"locator": "", 	        "city": "Oedt an der Wild"},
    {"date": "16.05.2022",	"callsign": "13CT1068",	"name": "Dietmar",	"locator": "", 	        "city": "Maintal"},
    {"date": "16.05.2022",	"callsign": "13CT0699",	"name": "Andreas",	"locator": "", 	        "city": "Dortmund"},
    {"date": "13.05.2022",	"callsign": "13CT2494",	"name": "Maik",	 	"locator": "",          "city": "Rügen"},
    {"date": "24.04.2022",	"callsign": "13CT8020",	"name": "Jochen",	"locator": "", 	        "city": "Neu - Ulm"},
    {"date": "24.04.2022",	"callsign": "13CT3111",	"name": "Karsten",	"locator": "JO31JV",	"city": "Borken"},
    {"date": "16.02.2022",	"callsign": "13CT1296",	"name": "Arno",	 	"locator": "",          "city": "Wiesmoor"},
    {"date": "20.01.2022",	"callsign": "13CT1766",	"name": "Michael",	"locator": "",	        "city": "Eutin"},
    {"date": "14.01.2022",	"callsign": "13CT3950",	"name": "Thomas",	"locator": "", 	        "city": "Staudt"},
    {"date": "14.01.2022",	"callsign": "13CT1769",	"name": "Thorsten",	"locator": "", 	        "city": "Maintal"},
    {"date": "13.01.2022",	"callsign": "13CT3054",	"name": "Peter",	"locator": "", 	        "city": "Kalbe/Burnau"},
    {"date": "24.10.2021",	"callsign": "13CT1989",	"name": "Lutz",	    "locator": "JO40PR",	"city": "Alsfeld"},
    {"date": "02.10.2021",	"callsign": "13CT3007",	"name": "Lenia",	"locator": "", 	        "city": "Hamm"},
    {"date": "17.07.2021",	"callsign": "13CT1920",	"name": "Georg", 	"locator": "",          "city": "Vilsbiburg"},
    {"date": "16.07.2021",	"callsign": "13CT1960",	"name": "Peter",	"locator": "JN68FJ",	"city": "Egglkofen"},
    {"date": "13.06.2021",	"callsign": "13CT1315",	"name": "Markus",	"locator": "JO40DA",	"city": "Mainz"},
    {"date": "12.06.2021",	"callsign": "13CT1698",	"name": "Colin",	"locator": "", 	        "city": "Zettliz"},
    {"date": "12.06.2021",	"callsign": "13CT1697",	"name": "Ralf",	 	"locator": "",          "city": "Zettliz"},
    {"date": "02.06.2021",	"callsign": "13CT1885",	"name": "Ulli",	 	"locator": "",          "city": "Sehmatal-Neudorf"},
    {"date": "20.05.2021",	"callsign": "13CT1754",	"name": "Reinhold",	"locator": "", 	        "city": "Bernau Am Chiemsee"},
    {"date": "18.04.2021",	"callsign": "13CT1976",	"name": "Daniel",	"locator": "", 	        "city": "Dresden"},
    {"date": "15.03.2021",	"callsign": "13CT1752",	"name": "Diethold",	"locator": "", 	        "city": "Castrop-Rauxel"},
    {"date": "09.03.2021",	"callsign": "13CT1850",	"name": "Stefan",	"locator": "", 	        "city": "Meschede"},
    {"date": "03.03.2021",	"callsign": "13CT1654",	"name": "Volker",	"locator": "", 	        "city": "Brilon"},
    {"date": "03.03.2021",	"callsign": "13CT1643",	"name": "Wilhelm",	"locator": "", 	        "city": "Steinhagen"},
    {"date": "03.03.2021",	"callsign": "13CT1619",	"name": "Michael",	"locator": "", 	        "city": "Hattingen"},
    {"date": "27.02.2021",	"callsign": "13CT1909",	"name": "Sven",	 	"locator": "",          "city": "Geldern"},
    {"date": "25.02.2021",	"callsign": "13CT1995",	"name": "Tom",	 	"locator": "",          "city": "Neubrandenburg"},
    {"date": "15.02.2021",	"callsign": "13CT1783",	"name": "Michael",	"locator": "", 	        "city": "Minden"},
    {"date": "09.02.2021",	"callsign": "13CT4801",	"name": "Roland",	"locator": "", 	        "city": "Laupheim"},
    {"date": "21.01.2021",	"callsign": "13CT1875",	"name": "Christian","locator": "",	 	    "city": "Dülmen"},
    {"date": "16.01.2021",	"callsign": "13CT1775",	"name": "Jacob", 	"locator": "",          "city": "Halle ( Saale )"},
    {"date": "12.01.2021",	"callsign": "13CT1474",	"name": "Marc",	 	"locator": "",          "city": "Dortmund"}
]

async function loadMemberList() {
    let container = document.getElementById('new-member-table');
    let tbody = container.getElementsByTagName('tbody')[0];
    if (tbody) {
        tbody.innerHTML = '';
        for (let i = 0; i < MEMBERLIST.length; i++) {
            const tableRow = document.createElement("tr");
            
            const dateTD = document.createElement("td");
            dateTD.textContent = MEMBERLIST[i].date;
            tableRow.appendChild(dateTD);

            const callsignTD = document.createElement("td");
            callsignTD.textContent = MEMBERLIST[i].callsign;
            tableRow.appendChild(callsignTD);

            const nameTD = document.createElement("td");
            nameTD.textContent = MEMBERLIST[i].name;
            tableRow.appendChild(nameTD);

            const locatorTD = document.createElement("td");
            locatorTD.textContent = MEMBERLIST[i].locator;
            tableRow.appendChild(locatorTD);

            const cityTD = document.createElement("td");
            cityTD.textContent = MEMBERLIST[i].city;
            tableRow.appendChild(cityTD);

            tbody.appendChild(tableRow);
        }
    } 
}