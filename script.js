// Display a welcome alert when the page is loaded
window.onload = function() {
    alert("Welcome to Tech Innovators' Homepage!");
    console.log("Welcome to Tech Innovators' Homepage!");
}

// Toggle visibility of the 'Group Members' section when clicked
document.getElementById("group-name").addEventListener("click", function() {
    const groupMembersSection = document.getElementById("group-members");
    groupMembersSection.style.display = groupMembersSection.style.display === "none" ? "block" : "none";
});
