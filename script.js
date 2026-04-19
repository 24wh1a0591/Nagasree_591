const apiKey = "9c43a4282559e4f6d2755e658f02203e";  // ⚠️ Replace with your key

let chart;

// Arrow Function + Async/Await
const getWeather = async () => {
  const city = document.getElementById("city").value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );

    // Check HTTP errors
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);

    // Handle API errors
    if (data.cod !== "200") {
      alert("Error: " + data.message);
      return;
    }

    processWeather(data, displayGraph);

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
};

// Callback Function
const processWeather = (data, callback) => {
  const temps = data.list.slice(0, 8).map(item => item.main.temp);

  // Format time labels (cleaner)
  const labels = data.list.slice(0, 8).map(item => {
    return item.dt_txt.split(" ")[1]; // only time
  });

  callback(labels, temps);
};

// Promise example (ES6 concept)
const fakePromise = () => {
  return new Promise(resolve => {
    resolve("Promise executed");
  });
};

fakePromise().then(console.log);

// Graph display
const displayGraph = (labels, temps) => {
  const canvas = document.getElementById("weatherChart");

  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }

  const ctx = canvas.getContext("2d");

  // Destroy old chart if exists
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Temperature (°C)",
        data: temps,
        borderWidth: 2,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "blue",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
};