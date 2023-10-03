function MainModule(listingsID = "#listings") {
  const me = {};


  const listingsElement = document.querySelector(listingsID);

  function getListingCode(listing) {
  //   return `<div class="col-4">
  // <div class="listing card">
  //   <img
  //     src="https://a0.muscache.com/pictures/b7c2a199-4c17-4ba6-b81d-751719d2dac6.jpg"
  //     class="card-img-top"
  //     alt="AirBNB Listing"
  //   />
  //   <div class="card-body">
  //     <h2 class="card-title">${listing.name}</h2>
  //     <div>${listing.price}</div>
  //     <p class="card-text">
  //       Some quick example text to build on the card title and make up
  //       the bulk of the card's content.
  //     </p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>
  // <!-- /card -->
  // </div>

  // `;
    return `<div class="col-4">
    <div class="listing card">
      <img
        src="${listing.picture_url}"
        class="card-img-top"
        alt="AirBNB Listing"
      />
      <div class="card-body">
        <h2 class="card-title">${listing.name}</h2>
        <img
          src="${listing.host_picture_url}"
          alt="${listing.host_name}'s Profile Picture"
          class="host-picture"
        />
        <p><strong>Host: </strong>${listing.host_name}</p>
        <p><strong>Price: </strong>${listing.price}</p>
        <p class="card-text"><strong>Description: </strong>${listing.description}</p>
        <p><strong>Amenities: </strong>${listing.amenities}</p>
        <p><strong>Number Of Guests: </strong>${listing.accommodates}</p>
        <a href="${listing.listing_url}" class="btn btn-primary">View Listing</a>
      </div>
    </div>
  </div>
`;
  }

  function redraw(listings) {
    listingsElement.innerHTML = "";
    // for (let i = 0; i < listings.length; i++) {
    //   listingsElement.innerHTML += getListingCode(listings[i]);
    // }

    // for (let listing of listings) {
    //   console.log("listing", listing );
    //   listingsElement.innerHTML += getListingCode(listing);
    // }

    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();


    me.redraw(listings.slice(0, 50));
  
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();


main.loadData();