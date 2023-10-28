function updateCalendar() {
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    // Send a POST request to your PHP server with month and year.
    // Process the response to generate the calendar and update #calendar-container.
    // You need server-side code to generate the calendar based on your data.

    // Example:
    // const calendarHTML = "<div class='cell'>1</div><div class='cell'>2</div>..."; 
    // document.getElementById("calendar-container").innerHTML = calendarHTML;
}

function changeCellColor(event) {
    if (event.key === "Enter") {
        const inputDate = parseInt(document.getElementById("date-input").value);
        // Send a POST request to your PHP server with the inputDate.
        // Update the cell background color based on the response from the server.
        // You need server-side code to handle this and store the last background color in PHP session.
    }
}
