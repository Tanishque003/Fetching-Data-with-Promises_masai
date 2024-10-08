// Function to fetch data from the Dog API
function fetchDogImage() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random'; // API URL

    // Use fetch to make a request to the API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data
        })
        .then(data => {
            // Display the fetched dog image in the HTML
            const imgUrl = data.message; // Extract image URL from the response
            document.getElementById('data').innerHTML = `
                <p>Here's a random dog for you:</p>
                <img src="${imgUrl}" alt="Random Dog">
            `;
        })
        .catch(error => {
            // Handle and display any errors that occur during the fetch operation
            document.getElementById('data').innerHTML = `
                <p>Error fetching data: ${error.message}</p>
            `;
        });
}

// Attach event listener to the button to trigger data fetching
document.getElementById('fetchData').addEventListener('click', fetchDogImage);
