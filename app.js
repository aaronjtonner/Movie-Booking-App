const movie = document.querySelector('#movie-selection');
const container = document.querySelector('#seat-container');
const seats = document.querySelectorAll('.row .seat:not(.seat-occupied)');
const totalSeats = document.querySelector('#total-seats');
const totalPrice = document.querySelector('#total-price');

let ticketPrice = +movie.value;

function movieSummary() {
	const selectedSeats = document.querySelectorAll('.row .seat.seat-selected');

	const updateSeatsSelected = selectedSeats.length;
	totalSeats.innerHTML = updateSeatsSelected;
	totalPrice.innerHTML = updateSeatsSelected * ticketPrice;
}

movie.addEventListener('change', (e) => {
	ticketPrice = +e.target.value;

	localStorage.setItem('selectedMovie', e.target.selectedIndex);
	localStorage.setItem('ticketPrice', ticketPrice);

	movieSummary();
});

container.addEventListener('click', (e) => {
	if (
		e.target.classList.contains('seat') &&
		!e.target.classList.contains('seat-occupied')
	) {
		e.target.classList.toggle('seat-selected');

		movieSummary();
	}
});
