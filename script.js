
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

   
    let city = document.getElementById('city').value; 
    let temperature = parseInt(document.getElementById('temperature').value); 
    let condition = document.getElementById('condition').value;
    let message = document.getElementById('message'); 
    let formContainer = document.getElementById('weatherForm'); 

    
    formContainer.classList.remove('bg-blue-600', 'bg-yellow-400', 'bg-red-600', 'text-white', 'text-black');

    
    if (isNaN(temperature)) {
        message.textContent = "Please enter a valid temperature.";
        formContainer.classList.add('bg-gray-700');
        return;
    }

    if (temperature < 10) {
        formContainer.classList.add('bg-blue-700', 'text-white', `font-bold`); 
        message.textContent = `It's cold outside in ${city}!`;
    } else if (temperature >= 10 && temperature <= 25) {
        formContainer.classList.add('bg-yellow-400', 'text-black', `font-bold`); // Yellow for mild weather
        message.textContent = `It's a pleasant day in ${city}!`;
    } else if (temperature > 25) {
        formContainer.classList.add('bg-red-600', 'text-white', `font-bold`); // Red for hot weather
        message.textContent = `It's hot outside in ${city}!`;
    }
});
