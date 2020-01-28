$(document).ready(function() {
  //console.log("Ready.......");
  $("#searchUser").on("keyup", function(name) {
    // console.log("Key pressed...");
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
      $("#profile").html(`
<div class="card card-deafult">
        <div class="card-header">
            <h3>${response.name}</h3>
        </div>
        <div class="card-body"> 
            <div class="row">
                <div class="col-md-3">
                    <img style="width:100%" class="thumbnail avatar" src="${response.avatar_url}"> 
                    <br>
                    <br>
                    <a target="_blank" class="btn btn-danger btn-block" href="${response.html_url}">View Profile</a>
                </div>
                <div class="col-md-9">

                </div>
            </div>
        </div>
      </div>
        `);
    });
  });
});
