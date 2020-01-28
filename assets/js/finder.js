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
      $.ajax({
        url: "https://api.github.com/users/" + userName + "/repos",
        data: {
          client_id: "3276363d77933931f154",
          client_secret: "69d80d1c3e9b13529d1cc601072f7ba65ba7a01d",
          sort: "create: asc",
          per_page: 5
        }
      }).done(function(repos) {
        $.each(repos, function(index, repo) {
          $("#repos").append(`
            <div class="card">
                <div class="row">
                    <div class="col-md-7">
                        <strong>${repo.name}</strong>: ${repo.description}
                    </div>
                    <div class="col-md-3">
                        <span class="badge badge-dark">Forks: ${repo.forks_count}</span>
                        <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
                    </div>
                    <div class="col-md-2">
                        <a href="${repo.html_url}" target="_blank" class="btn btn-dark">Repo Page</a>
                    </div>
                </div>
            </div>
            `);
        });
      });

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
                    <span class="badge badge-dark">Public Reops: ${response.public_repos}</span>
                    <span class="badge badge-primary">Public Gists: ${response.public_gists}</span>
                    <span class="badge badge-success">Followers: ${response.followers}</span>
                    <span class="badge badge-info">Following: ${response.following}</span>  
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${response.company}</li>
                        <li class="list-group-item">Blog: ${response.blog}</li>
                        <li class="list-group-item">Location: ${response.location}</li>
                        <li class="list-group-item">Email_id: ${response.email}</li>
                        <li class="list-group-item">Member Since: ${response.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <br>
        <h3 class="page-header">Latest Repos</h3>
        <div id="repos"></div>
        `);
    });
  });
});
