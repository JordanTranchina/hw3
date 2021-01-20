function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page is refreshed or reloaded, the 'ride' variable will contain something different)
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  // console.log(ride.length)
  // these variables map to the elements on the finished page;
  // assign the proper value to each variable


  if (ride.length > 1) {   // if length of ride is > 1 then level of service = Noober Pool
    levelOfService = "Noober Pool"
  } else if (ride[0].purpleRequested == true) {   // if purpleRequest = true, then level of service = Noober Purple = always 1
    levelOfService = "Noober Purple"
  } else if (ride[0].numberOfPassengers > 3) {    // if number of total people is > 3, then level of service = Noober XL
    levelOfService = "Noober XL"
  } else {
    levelOfService = "Noober X"
  }

  console.log( //verifying drivers of above code are correct through console log
    `the ride length is ${ride.length}.
    `,
    `purpleRequested status is ${ride[0].purpleRequested}.
    `,
    `the number of passengers is ${ride[0].numberOfPassengers}.
    `,
  );

  // pulling info from database based on ride length. This eliminates previous error with missing rider3 data when ride length was 2, for example
  if (ride.length == 3) {
    // // Passenger 3 - Overall
    passenger3Name = `${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}`;
    passenger3Phone = ride[2].passengerDetails.phoneNumber;
    passenger3NumberOfPassengers = ride[2].numberOfPassengers;

    // Passenger 3 - Pickup & Dropoff
    passenger3PickupAddressLine1 = ride[2].pickupLocation.address;
    passenger3PickupAddressLine2 = `${ride[2].pickupLocation.city}, ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}`;
    passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address;
    passenger3DropoffAddressLine2 = `${ride[2].dropoffLocation.city}, ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}`;


    // // Passenger 2 - Overall
    passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`;
    passenger2Phone = ride[1].passengerDetails.phoneNumber;
    passenger2NumberOfPassengers = ride[1].numberOfPassengers;

    // Passenger 2 - Pickup & Dropoff
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address;
    passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`;
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address;
    passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`;


    // // Passenger 1 - Overall
    passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`;
    passenger1Phone = ride[0].passengerDetails.phoneNumber;
    passenger1NumberOfPassengers = ride[0].numberOfPassengers;

    // Passenger 1 - Pickup & Dropoff
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address;
    passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`;
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address;
    passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`;

  } else if (ride.length == 2) {
    // // Passenger 2 - Overall
    passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`;
    passenger2Phone = ride[1].passengerDetails.phoneNumber;
    passenger2NumberOfPassengers = ride[1].numberOfPassengers;

    // Passenger 2 - Pickup & Dropoff
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address;
    passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`;
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address;
    passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`;


    // // Passenger 1 - Overall
    passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`;
    passenger1Phone = ride[0].passengerDetails.phoneNumber;
    passenger1NumberOfPassengers = ride[0].numberOfPassengers;

    // Passenger 1 - Pickup & Dropoff
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address;
    passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`;
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address;
    passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`;

  } else {
    // // Passenger 1 - Overall
    passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`;
    passenger1Phone = ride[0].passengerDetails.phoneNumber;
    passenger1NumberOfPassengers = ride[0].numberOfPassengers;

    // Passenger 1 - Pickup & Dropoff
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address;
    passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`;
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address;
    passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`;

  }

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}