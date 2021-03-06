# Github-Finder

### Getting Started

We will build a JavaScript/jQuery application that fetches and displays Github user profile info and repositories using Ajax. We will work with functions, events, loops, the \$.ajax method and more.

### Technologies Used

- HTML
- Bootstrap
- JQuery
- Ajax

<img width="1029" alt="Screen Shot 2020-01-28 at 7 42 03 PM" src="https://user-images.githubusercontent.com/52920074/73318106-6af68800-4206-11ea-814c-2cfb1f3dbeae.png">
<img width="1433" alt="Screen Shot 2020-01-28 at 7 42 25 PM" src="https://user-images.githubusercontent.com/52920074/73318107-6b8f1e80-4206-11ea-9b83-835776e92683.png">

### Make request to Github

#### Request Method

GET

#### Usage

```
    $.ajax({
      url: "https://api.github.com/users/" + userName,
      data: {
        client_id: "YOUR_CLIENT_ID",
        client_secret: "YOUR_CLIENT_SECRET"
      }
    }).done(function(response) {
        ${response.name}

```

### GitHub Deployment

[Check the link](https://keerthi-mani.github.io/Github-Finder/)

### Feedback and issues:

I really appreciate your feedback. If you want to see some improvements in the app I'll be really grateful if you can drop me a message.

Additionally, if you find any issue when running the app or any other other matter, please feel free to open an issue in this Github repo.

Author - Keerthi

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgement

- Joe Han, Joshua Appel, Erin Rizal, & Jonathan Ho - Rutgers BCS Instructor and TA's

- All of the Rutgers BCS Classmates that help make everyday an amazing experience.
