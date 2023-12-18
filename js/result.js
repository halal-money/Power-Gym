"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Function to get query parameters from the URL
  function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    const result = {};

    for (const [key, value] of queryParams) {
      result[key] = value;
    }

    return result;
  }

  // Function to display results based on user's answers
  function displayResults() {
    const queryParams = getQueryParams();

    // Check if the necessary parameters are present
    if (
      queryParams.q1 &&
      queryParams.q2 &&
      queryParams.q3 &&
      queryParams.q4
    ) {
      // Get user answers
      const q1Answer = queryParams.q1;
      const q2Answer = queryParams.q2;
      const q3Answer = queryParams.q3;
      const q4Answer = queryParams.q4;

      // Example if-else statements to determine the result based on answers
      let resultText = "";
      if (q1Answer === "18-24" && q2Answer === "Gain 5-10 pounds") {
        resultText = "You're on the right track for your age group!";
      } else if (q1Answer === "25-34" && q2Answer === "Gain 10-20 pounds") {
        resultText = "You have ambitious weight gain goals!";
      } else {
        resultText = "Your answers lead to a generic result.";
      }

      // Display the result on the page
      const resultsContainer = document.getElementById("resultsContainer");
      resultsContainer.textContent = resultText;
    } else {
      // Handle the case where parameters are missing
      console.error("Missing parameters in the URL");
    }
  }

  // Call the function to display results when the DOM is loaded
  displayResults();
});
