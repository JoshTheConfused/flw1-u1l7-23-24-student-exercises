// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
  profileName.innerHTML = "Joshua Federman";

    // 2. Updated the src of profileImage a picture of you or one that makes sense.
  profileImage.src = "https://stem.ucf.edu/wp-content/uploads/2022/11/Joshua-Federman-scaled.jpeg";

    // 3. Updated the src of main to a photo that's be your first post.
  main.src = "https://cdn.vox-cdn.com/thumbor/YAPRoT9zjlGPiogNN1qeguHwDoo=/0x165:1000x915/1200x800/filters:focal(0x165:1000x915)/cdn.vox-cdn.com/uploads/chorus_image/image/46800412/_haveseen_shutterstock_130167068.0.0.jpg";


});