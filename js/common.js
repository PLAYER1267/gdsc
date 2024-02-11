// Creating an empty object
let myDictionary = {};

// Adding key-value pairs
myDictionary["Rajesh"] = "pass1";
myDictionary["Ram"] = "pass2";
myDictionary["Shelia"] = "pass3";


function verifyPassword(username, password) {
    // Check if the username exists in the dictionary
    if (myDictionary.hasOwnProperty(username)) {
        // Compare the entered password with the stored password
        if (myDictionary[username] === password) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}




function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication logic here (e.g., check username and password against a server)
    const isAuthenticated = verifyPassword(username,password);

    if (isAuthenticated) {
        document.getElementById('authentication').style.display = 'none';
        document.getElementById('role-portal').style.display = 'block';

        // Load role-specific content based on the user's role (you can implement this logic)
        loadRoleContent(username); // This function should be implemented in each role-specific file
    } else {
        alert('Authentication failed. Please check your username and password.');
    }
}