document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;

    addVehicle(make, model, year);
});

function addVehicle(make, model, year) {
    const vehicleList = document.getElementById('vehicleList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${make}</td>
        <td>${model}</td>
        <td>${year}</td>
        <td><button class="remove-button" onclick="removeVehicle(this)">Remove</button></td>
    `;
    vehicleList.appendChild(row);

    document.getElementById('vehicleForm').reset();
}

function removeVehicle(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}