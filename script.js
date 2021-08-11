const getData = (val) => {
	fetch(`https://api.pexels.com/v1/search?query=${val}`, {
		method: 'GET',
		headers: {
			Authorization: '563492ad6f9170000100000169e802df196c4afc8c024fc30669fb4f',
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data.photos);
			return displayPhotos(data.photos);
		})
		.catch((err) => {
			console.error(err);
		});
	document.getElementById('hide').classList.remove('hidden');
};
function displayPhotos(photos) {
	const row = document.querySelector('.row');

	row.innerHTML = photos
		.map(
			(photo) => `
                    <div class="col-12 col-sm-6 col-md-4 py-2">
                        <div class="card" >
                            <img src="${photo.src.portrait}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${photo.photographer}</h5>
                                <p class="card-text">${photo.id}</p>
                            </div>
                        </div>
                    </div>
                `,
		)
		.join('');
}
const getData2 = () => {
	let selected = document.getElementById('list').value;
	console.log(selected);
	fetch(`https://api.pexels.com/v1/search?query=${selected}`, {
		method: 'GET',
		headers: {
			Authorization: '563492ad6f9170000100000169e802df196c4afc8c024fc30669fb4f',
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data.photos);
			return displayPhotos(data.photos);
		})
		.catch((err) => {
			console.error(err);
		});
	document.getElementById('hide').classList.remove('hidden');
};
function hide() {
	const row = document.querySelector('.row');
	row.innerHTML = '';
	document.querySelector('.hide').remove();
}
let op = document.querySelector('option');
