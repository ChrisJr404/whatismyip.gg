// Function to fetch IP and location details
async function fetchIPDetails() {
  try {
    const response = await fetch("http://ip-api.com/json/");
    const data = await response.json();

    // Populate the fields with the data
    document.getElementById("ipv4").textContent = data.query || "Not available";
    document.getElementById("ipv6").textContent = "Unavailable (Free API limitation)";
    document.getElementById("isp").textContent = data.isp || "Not available";
    document.getElementById("city").textContent = data.city || "Not available";
    document.getElementById("region").textContent = data.regionName || "Not available";
    document.getElementById("country").textContent = data.country || "Not available";
  } catch (error) {
    console.error("Error fetching IP details:", error);
    document.getElementById("ip-info").textContent = "Unable to fetch IP details. Please try again later.";
  }
}

// Call the function on page load
fetchIPDetails();
