$(document).ready(function() {
  //console.log("Ready.......");
  $("#searchUser").on("keyup", function(name) {
    //     // console.log("Key pressed...");
    let userName = name.target.value;
    // console.log(userName);

    //Make request to Github
    $.ajax({
      url: "https://api.github.com/users/" + userName,
      data: {
        client_id: "3276363d77933931f154",
        client_secret: "69d80d1c3e9b13529d1cc601072f7ba65ba7a01d"
      }
    }).done(function(response) {
      //   console.log(response);
    });
  });
});
