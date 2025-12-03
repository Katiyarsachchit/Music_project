// Function to scroll smoothly to the tour section
function scrollToTour() {
    const tourSection = document.getElementById('tour');
    tourSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to handle Ticket purchases
function buyTicket(city) {
    alert("Great choice! You have selected tickets for the " + city + " show. \nRedirecting to payment gateway...");
}

// Function to handle Merchandise Cart
function addToCart(itemName, price) {
    // In a real app, this would add to a shopping cart object
    // Here we will just confirm the action to the user
    let confirmBuy = confirm("Add '" + itemName + "' to your cart for ₹" + price + "?");
    
    if (confirmBuy) {
        alert(itemName + " has been added to your cart!");
    } else {
        console.log("Action cancelled");
    }
}

// Add a little console message for developers
console.log("Neon Horizon Website Loaded Successfully");