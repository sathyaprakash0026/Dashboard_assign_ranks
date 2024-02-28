
const applicants = [

  {
    applicant: "applicants5",
    applicantid: "1",
    imageSrc: "assets/img/priyanka-1.jpg",
    image: "assets/img/priyanka-5.jpg",
    name: "Priyanka Gupta",
    experience: "2",
    text: " Hi, there! I am a Product Designer and a tech enthusiast based in San Francisco A product designer and tech enthusiast based in San Francisco.",
    uiux: "88%",
    html: "95%",
    css: "83%",
    js: "75",
    imagesrc3: "assets/img/priyanka-3.png",
    imagesrc2: "assets/img/priyanka-2.jpg",
    link: "https://priyanka.io/",
    rating: "63"
  },

  {
    applicant: "applicants4",
    applicantid: "2",
    experience: "5",
    image: "assets/img/gloria-5.png",
    imageSrc: "assets/img/olivia-1.jpg",
    name: "Olivia Truong",
    text: " A product designer based in Boston, Massachusetts. In my own words, I like to go out into the world and capture its beauty and weirdness",
    uiux: "88%",
    html: "93%",
    css: "82%",
    js: "68%",
    imagesrc3: "assets/img/olivia-3.png",
    imagesrc2: "assets/img/olivia-2.jpg",
    link: "https://www.oliviatruong.design/",
    rating: "74"
  },

  {
    applicant: "applicants2",
    applicantid: "3",
    experience: "3",
    name: "Moritz Oesterlau",
    image: "assets/img/moritz5.jpg",
    imageSrc: "assets/img/moritz.jpg",
    text: "I‘m a UX/UI Designer with over six years experience conceptualizing and crafting digital products, helping businesses and non-profits expand their capacity for impact",
    uiux: "78%",
    html: "87%",
    css: "89%",
    js: "60%",
    imagesrc2: "assets/img/moritz1.jpg",
    imagesrc3: "assets/img/moritz2.png",
    link: "https://www.moritzoesterlau.de/",
    rating: "59"
  },
  {
    applicant: "applicants3",
    applicantid: "4",
    experience: "3",
    name: "Elizabeth Lin",
    image: "assets/img/olivia-5.png",
    imageSrc: "assets/img/elizabeth1.jpg",
    text: "I'm passionate about design education and UX Design.I support each case study with meaningful visuals—that is, real artifacts from your project, not just illustrations.",
    uiux: "89%",
    html: "90%",
    css: "89%",
    js: "60%",
    imagesrc2: "assets/img/elizabeth2.jpg",
    imagesrc3: "assets/img/elizabeth3.jpg",
    link: "https://www.elizabethylin.com/",
    rating: "76"
  },
  {
    applicant: "applicants1",
    applicantid: "5",
    experience: "4",
    name: "Gloria Lo",
    image: "assets/img/gloria-5.png",
    imageSrc: "assets/img/gloria-3.gif",
    text: "I'm a product designer based in Sydney, Australia with experience in delivering end-to-end UX/UI design for software products. I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday.",
    uiux: "85%",
    html: "95%",
    css: "85%",
    js: "65%",
    imagesrc2: "assets/img/gloria-2.png",
    imagesrc3: "assets/img/gloria-4.png",
    link: "https://www.glorialo.design/",
    rating: "0"
  },

];


document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.menu-item');
  const contentAreas = document.querySelectorAll('.main-content');

  // Initially select the Dashboard menu item
  document.querySelector('.menu-item[data-target="dashboard"]').classList.add('active');

  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
     
      menuItems.forEach(item => {
        item.classList.remove('active');
      });

    
      this.classList.add('active');


      contentAreas.forEach(content => {
        content.style.display = 'none';
      });

      // Get the target data attribute
      const target = this.getAttribute('data-target');

      const contentToShow = document.querySelector(`.main-content.${target}-content`);
      if (contentToShow) {
        contentToShow.style.display = 'block';
      }
    });
  });
});


window.addEventListener('resize', function (event) {
  location.reload();
});

let barChart;

function renderBarChart(data) {
  const barChartOptions = {
    series: [
      {
        data: data.map(applicant => applicant.rating),
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: data.map(applicant => applicant.name),
    },
    yaxis: {
      title: {
        text: 'Rating',
      },
    },
  };

  // Check if barChart is already initialized
  if (barChart) {
    barChart.updateOptions({
      series: barChartOptions.series,
      xaxis: barChartOptions.xaxis,
    });
  } else {
    barChart = new ApexCharts(
      document.querySelector('#bar-chart'),
      barChartOptions
    );
    barChart.render();
  }
}

// Initial rendering of the bar chart
renderBarChart(applicants);

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Submitted',
      data: [3, 5, 15, 11, 0, 0, 0],
    },
    {
      name: 'Not Submitted',
      data: [31, 26, 8, 3, 0, 0, 0],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Submission',
      },
    },
    {
      opposite: true,
      title: {
        //   text: '',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();



window.openPopup12 = function (applicantId) {
  currentApplicant = applicantId;
  const popupContainer = document.getElementById('popupContainer'); 
  popupContainer.style.display = 'flex';
};


document.addEventListener('DOMContentLoaded', function () {
  const designSlider = document.getElementById('design');
  const designValue = document.getElementById('designValue');
  const scalabilitySlider = document.getElementById('scalability');
  const scalabilityValue = document.getElementById('scalabilityValue');
  const functionalitySlider = document.getElementById('functionality');
  const functionalityValue = document.getElementById('functionalityValue');
  const feedbackTextarea = document.getElementById('feedback');
  const submitBtn = document.getElementById('submitBtn');
  let currentApplicant; 

  designSlider.addEventListener('input', function () {
    designValue.textContent = designSlider.value;
  });

  scalabilitySlider.addEventListener('input', function () {
    scalabilityValue.textContent = scalabilitySlider.value;
  });

  functionalitySlider.addEventListener('input', function () {
    functionalityValue.textContent = functionalitySlider.value;
  });

  submitBtn.addEventListener('click', function () {
    //forExample    
    let appaa = "applicants1"
    const designRating = parseFloat(designSlider.value);
    const scalabilityRating = parseFloat(scalabilitySlider.value);
    const functionalityRating = parseFloat(functionalitySlider.value);

    // Define weights for each rating
    const designWeight = 0.3;
    const scalabilityWeight = 0.4;
    const functionalityWeight = 0.3;

    // Calculate the weighted sum of ratings
    const weightedSum = (designRating * designWeight) + (scalabilityRating * scalabilityWeight) + (functionalityRating * functionalityWeight);

    // Calculate the overall rating
    const overallRating = (weightedSum * 10).toFixed(1); // Multiply by 10 to scale to 100


    if (appaa) {
      const applicantIndex = applicants.findIndex(applicant => applicant.applicant === appaa);
      if (applicantIndex !== -1) {
        applicants[applicantIndex].rating = overallRating;
        console.log(applicants)

        // Function to update the table with new data
        function updateTable() {
          const tableBody = document.getElementById("applicantTableBody");
          // Clear the table before rendering updated data
          tableBody.innerHTML = "";
          // Re-render the table with updated data
          createApplicantRows();
        }


        //updating the rating of an applicant:
        if (applicantIndex !== -1) {
          applicants[applicantIndex].rating = overallRating;
          console.log(applicants);
          updateTable();
          if (applicants) {
            renderBarChart(applicants);

          }
        }
      }
    }

    // Reset form or close popup
    designSlider.value = 6;
    scalabilitySlider.value = 6;
    functionalitySlider.value = 6;
    feedbackTextarea.value = '';

    // Close the popup or show a thank you message
    document.getElementById('popupContainer').style.display = 'none'; 
  });

  const openPopupBtn = document.getElementById('openPopupBtn');
  const popupContainer = document.getElementById('popupContainer');

  openPopupBtn.addEventListener('click', function () {
    popupContainer.style.display = 'flex';
  });

  const closePopupBtns = document.querySelectorAll('.close-custom-popup');
  closePopupBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      popupContainer.style.display = 'none';
    });
  });



});

const closePopupBtn = document.getElementById('closePopupBtn');
closePopupBtn.addEventListener('click', function () {
  popupContainer.style.display = 'none';
});



function createApplicantRows() {
  const tableBody = document.getElementById("applicantTableBody");

  applicants.forEach((applicant, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${index + 1}</td>
          <td class="info">
              <img src="${applicant.image}" width="40px" height="40px" alt="">
              <div>
                  <h4>${applicant.name}</h4>
                  <small>Experience: ${applicant.experience} years</small>
              </div>
          </td>
          <td>UI/UX Design</td>
          <td>27-Feb-2024</td>
          <td>
 
              Submitted
          </td>
          <td>
          <button class="button11" onclick="openPopup('${applicant.applicant}')">View</button>
      </td>
      <td>
    ${applicant.rating == 0 ? `<button class="button11" onclick="openPopup12('${applicant.applicant}')">UnRanked</button>` : applicant.rating}
</td>          
      `;
    tableBody.appendChild(row);
  });
}

// Call the function to create table rows for each applicant when the page loads
window.onload = function () {
  createApplicantRows();

};



function openPopup(applicant) {
  const selectedApplicant = applicants.find(app => app.applicant === applicant);

  console.log(selectedApplicant, applicant, "openpop")
  if (selectedApplicant) {
    const popupImageContainer = document.getElementById("popupImageContainer");


    popupImageContainer.innerHTML = `
        <div class="card11pop" id="cardContainer">
        <h1>${selectedApplicant.name}'s Design</h1> 
            
            <div class="card-item" data-applicant="${selectedApplicant.applicant}">
          
            <h3>${selectedApplicant.text}</h3> 
            <br/>   
            <img src="${selectedApplicant.imageSrc}" alt="${selectedApplicant.name}">
            <br/>          
             
               
            </div>
            
            <div class="card-item" data-applicant="${selectedApplicant.applicant}">
            <img src="${selectedApplicant.imagesrc2}" alt="${selectedApplicant.name}">
        </div>
        <br/>  

        <div class="card-item" data-applicant="${selectedApplicant.applicant}">
        <img src="${selectedApplicant.imagesrc3}" alt="${selectedApplicant.name}">
    </div>
    <br/>  
            </div>`;


    document.getElementById("popup").style.display = "flex";
  }
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Create card items for each applicant
const cardContainer = document.getElementById("cardContainer");
applicants.forEach(applicant => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");
  cardItem.setAttribute("data-applicant", applicant.applicant);
  cardItem.innerHTML = `
        <a class="work__img"><img src="${applicant.imageSrc}" alt="${applicant.name}"></a>
        <br/>        
        <h3>${applicant.name}</h3>`; 
  cardContainer.appendChild(cardItem);

  cardItem.addEventListener('click', function () {
    const applicantId = this.getAttribute('data-applicant');
    openPopup(applicantId);
  });
});







