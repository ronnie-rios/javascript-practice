const objectToStore = { id: "example123", points: 50 };
const objectString = JSON.stringify(objectToStore);

// Set a cookie with the JSON string
document.cookie = `myObject=${objectString}; domain=example.com; path=/`;

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      const objectString = decodeURIComponent(cookie[1]);
      return JSON.parse(objectString);
    }
  }
  return null;
}

const myObject = getCookie("myObject");
if (myObject) {
  // Use the parsed object
  console.log("Object ID:", myObject.id);
  console.log("Object Points:", myObject.points);
} else {
  console.log("Object cookie not found.");
}

// Remove the "myObject" cookie by setting its expiration date to a past date
document.cookie = "myObject=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=example.com";
