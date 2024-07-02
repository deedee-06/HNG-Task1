document.addEventListener("DOMContentLoaded", function () {
  function updateTimeAndDate() {
    const currentTime = new Date();
    const utcTime = currentTime.toUTCString();
    const day = currentTime.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("currentDay").innerText = `Hello there, it's ${day}`;
    document.getElementById(
        "currentTime"
      ).innerText = `The Time(UTC) states ${utcTime}`;

  }

  // Natural width and height for the profile image
  const profileImage = document.getElementById("profileImage");
  profileImage.onload = function () {
    profileImage.style.width = `${profileImage.naturalWidth}px`;
    profileImage.style.height = `${profileImage.naturalHeight}px`;
  };

  // Update time every second
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 1000);
});
