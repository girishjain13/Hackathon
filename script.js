document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/getParticipants")
        .then(response => response.json())
        .then(data => populateTable(data))
        .catch(error => console.error("Error fetching data:", error));
});

function populateTable(participants) {
    const tableBody = document.querySelector("#participantTable tbody");
    tableBody.innerHTML = ""; // Clear previous data

    participants.forEach(participant => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${participant.name}</td>
            <td>${participant.email}</td>
            <td>${participant.phone}</td>
            <td>${participant.company}</td>
        `;
    });
}
