import { dataHandler } from './data_handler.js';

function displayShows(data) {  
  let indexWrapper = document.querySelector('.index-wrapper');
  if (indexWrapper) {
    let contentHeader = `<h1 class="title text-center">Welcome page</h1>
    <div class="card">
    <h2>Welcome TV show lovers!</h2></div>`;
    indexWrapper.innerHTML = contentHeader;
    let content = document.querySelector('.card');
    data.forEach((element) => {
      let showTitle = `<p>${element.title}</p>`;
      content.insertAdjacentHTML('beforeend', showTitle);
    });
  }
}

function displayMostRatedShows(data) {
  let mostRatedWrapper = document.querySelector('.most-rated-wrapper');
  if (mostRatedWrapper) {
    let tableWrapper = document.createElement('div');
    tableWrapper.classList.add('card');
    let table = document.createElement('table');
    let tableHeader = document.createElement('thead');
    let tableHeaderRow = document.createElement('tr');
    let title = document.createElement('th');
    let runtime = document.createElement('th');
    let rating = document.createElement('th');
    let genres = document.createElement('th');
    let trailer = document.createElement('th');
    let homepage = document.createElement('th');
    title.innerText = 'Title';
    runtime.innerText = 'Runtime';
    rating.innerText = 'Rating';
    genres.innerText = 'Genres';
    trailer.innerText = 'Trailer';
    homepage.innerText = 'Homepage';
    tableHeaderRow.appendChild(title);
    tableHeaderRow.appendChild(runtime);
    tableHeaderRow.appendChild(rating);
    tableHeaderRow.appendChild(genres);
    tableHeaderRow.appendChild(trailer);
    tableHeaderRow.appendChild(homepage);
    tableHeader.appendChild(tableHeaderRow);
    table.appendChild(tableHeader);
    let tableBody = document.createElement('tbody');
    data.forEach((element) => {
        let tableBodyRow = `
        <tr>
        <td>${element.title}</td>
        <td>${element.runtime}</td>
        <td>${element.rating}</td>
        <td>${element.genres}</td>
        <td>${element.trailer}</td><td>${element.homepage}</td>
        <td class="action-column">
        <button type="button" class="icon-button"><i class="fa fa-edit fa-fw"></i></button>
        <button type="button" class="icon-button"><i class="fa fa-trash fa-fw"></i></button>
        </td>
        </tr>`;
      tableBody.insertAdjacentHTML('beforeend', tableBodyRow);
    });
    table.appendChild(tableBody);
    tableWrapper.appendChild(table);
    mostRatedWrapper.appendChild(tableWrapper);

  }
}



dataHandler.apiGet('/get-shows', (data) => {
  displayShows(data);
});


dataHandler.apiGet('/get-15-most-rated/1', (data) => {
  displayMostRatedShows(data);
});


  /* <div class="card">
            This is an example for a table:
            <table>
                <thead>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                    <th class="action-column">e</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Dolor</td>
                    <td>Sit amet</td>
                    <td class="action-column">
                        <button type="button" class="icon-button"><i class="fa fa-edit fa-fw"></i></button>
                        <button type="button" class="icon-button"><i class="fa fa-trash fa-fw"></i></button>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Dolor</td>
                    <td>Sit amet</td>
                    <td class="action-column">
                        <button type="button" class="icon-button"><i class="fa fa-edit fa-fw"></i></button>
                        <button type="button" class="icon-button"><i class="fa fa-trash fa-fw"></i></button>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Dolor</td>
                    <td>Sit amet</td>
                    <td class="action-column">
                        <button type="button" class="icon-button"><i class="fa fa-edit fa-fw"></i></button>
                        <button type="button" class="icon-button"><i class="fa fa-trash fa-fw"></i></button>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Dolor</td>
                    <td>Sit amet</td>
                    <td class="action-column">
                        <button type="button" class="icon-button"><i class="fa fa-edit fa-fw"></i></button>
                        <button type="button" class="icon-button"><i class="fa fa-trash fa-fw"></i></button>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Dolor</td>
                    <td>Sit amet</td>
                    <td class="action-column">
                        <button type="button" class="icon-button"><i class="fa fa-edit fa-fw"></i></button>
                        <button type="button" class="icon-button"><i class="fa fa-trash fa-fw"></i></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div> */
