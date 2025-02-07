// let searchInput = document.getElementById("searchInput");
// let searchResults = document.getElementById("searchResults");
// let spinnerEl = document.getElementById("spinner");

// function createAndAppend(each) {
//     let {
//         link,
//         title,
//         description
//     } = each;
//     let resultContainer = document.createElement("div");
//     resultContainer.classList.add("result-item");
//     let resultTitle = document.createElement("a");
//     resultTitle.href = link;
//     resultTitle.target = "_blank";
//     resultTitle.textContent = title;
//     resultTitle.classList.add("result-title");
//     console.log(resultContainer);
//     resultContainer.appendChild(resultTitle);

//     let linebreak = document.createElement("br");
//     resultContainer.appendChild(linebreak);

//     let url = document.createElement("a");
//     url.href = link;
//     url.target = "_blank";
//     url.textContent = link;
//     url.classList.add("result-url");
//     resultContainer.appendChild(url);

//     let linebreak1 = document.createElement("br");
//     resultContainer.appendChild(linebreak1);

//     let descriptionEl = document.createElement("p");
//     descriptionEl.classList.add("link-description");
//     descriptionEl.textContent = description;
//     resultContainer.appendChild(descriptionEl);

//     searchResults.appendChild(resultContainer);
// }

// function displaySearchResult(results) {
//     for (let each of results) {
//         createAndAppend(each);
//     }

// }

// function wikipediaSearch(event) {

//     if (event.key === "Enter") {
//         spinnerEl.classList.toggle("d-none");
//         searchResults.textContent = "";
//         let searchValue = searchInput.value;
//         let url = "https://apis.ccbp.in/wiki-search?search=" + searchValue;
//         let options = {
//             method: "GET"
//         }
//         fetch(url, options)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(jsonData) {
//                 spinnerEl.classList.toggle("d-none");
//                 let {
//                     search_results
//                 } = jsonData;
//                 displaySearchResult(search_results);
//             });
//     }
// }
// searchInput.addEventListener("keydown", wikipediaSearch);

document.querySelectorAll('.ad-type-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.ad-type-option').forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
    });
  });
  

  // Add event listeners to each pricing card to toggle the 'selected' state
  document.getElementById('basicCard').addEventListener('click', function() {
    toggleSelection(this);
  });

  document.getElementById('proCard').addEventListener('click', function() {
    toggleSelection(this);
  });

  document.getElementById('premiumCard').addEventListener('click', function() {
    toggleSelection(this);
  });

  function toggleSelection(card) {
    // Remove 'selected' class from all cards
    document.querySelectorAll('.pricing-card').forEach(function(card) {
      card.classList.remove('selected');
      card.querySelector('.tick-icon').style.display = 'none'; // Hide tick icon
    });
    

    // Add 'selected' class to the clicked card and show the tick icon
    card.classList.add('selected');
    card.querySelector('.tick-icon').style.display = 'block'; // Show tick icon
  }


 // Define pricing values for each plan
const prices = {
    basic: "29.90 CHF",
    pro: "79.90 CHF",
    premium: "149.90 CHF"
  };
  
  // Get all radio inputs and the Payer button amount span
  const pricingCards = document.querySelectorAll(".pricing-card input[type='radio']");
  const payerAmount = document.getElementById("amount");
  
  // Function to update the Payer button price based on selected card
  function updatePayerButton() {
    const selectedCard = document.querySelector(".pricing-card input[type='radio']:checked");
    if (selectedCard) {
      payerAmount.textContent = prices[selectedCard.value]; // Update the amount based on the selected card
    }
  }
  
  // Add event listeners to each radio input's label (clicking on label triggers radio button change)
  document.querySelectorAll(".pricing-card label").forEach(label => {
    label.addEventListener("click", updatePayerButton); // Listen for clicks on the label (which wraps the radio input)
  });
  
  // Call the function on page load to set the default price
  updatePayerButton();


  document.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox and Payer button elements
    const termsCheckbox = document.getElementById("termsCheckbox");
    const payerButton = document.getElementById("payerButton");
  
    // Function to toggle the "Payer" button's disabled state
    function togglePayerButton() {
      payerButton.disabled = !termsCheckbox.checked; // Disable if not checked, enable if checked
    }
  
    // Listen for changes in the checkbox status
    termsCheckbox.addEventListener("change", togglePayerButton);
  
    // Initialize button state on page load
    togglePayerButton();
  });
  

  
  



    