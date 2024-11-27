// Remove the event listeners for the popup
document.querySelectorAll("iframe").forEach((iframe) => {
    iframe.removeEventListener("play", showPopup);  // No longer needed
    iframe.removeEventListener("pause", hidePopup); // No longer needed
});
