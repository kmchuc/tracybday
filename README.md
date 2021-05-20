<br />
<p align="center">
  <h3 align="center">Tracy's Bday</h3>

  <p align="center">
    Due to the Covid-19 pandemic, my sister and I couldn't see each other for her 21st birthday. I decided to use my developer skills to create this full stack application. I created a message board allowing her friends and family to post a personal birthday message! 
    <br />
    <a href="https://github.com/kmchuc/tracybday"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://tracybday.herokuapp.com/#/">View Demo</a>
      ·
    <a href="https://github.com/kmchuc/tracybday/issues">Report Bug</a>
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

[![Landing Page Screenshot](https://user-images.githubusercontent.com/59525393/118931595-ee982480-b8e2-11eb-8da2-404ab350622c.png)](https://tracybday.herokuapp.com/#/)

My little sister and I have celebrated every birthday together until this year. Due to COVID-19 restrictions, my sister had to stay in California for school and I returned home to Hawaii after graduating from my bootcamp. Since we were separated by the Pacific Ocean, I decided to put my coding skills to good use and created a message board where friends and family could post messages celebrating her birthday! 

### Built With

* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [React](https://reactjs.org/)
* [PostgreSQL](https://www.postgresql.org/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kmchuc/tracybday
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Usage

### Landing Page
<img src='https://user-images.githubusercontent.com/59525393/118933807-5a7b8c80-b8e5-11eb-9cc5-1658b167d6a0.gif' width='1000' height='475'/>

The landing page displays a looped video made up of clips from my sister's childhood. The 'Let's Party!' button leads you to the next page which displays all the messages left for my sister.

### Content Page
<img src='https://user-images.githubusercontent.com/59525393/119043539-d9f47480-b954-11eb-9dc7-bb6f0b342cc7.gif' width='1000' height='475'/>

The content page displays the messages submitted by friends. The process of posting your message consists of clicking the "Leave Tracy a birthday message!". The submit button will not be click-able until both fields within the form are filled. Once submitted, you will be redirected back to the content page, dynamically refreshing the page, showing your new message along with previously posted messages.

### About Page
![About Page](https://user-images.githubusercontent.com/59525393/119045702-833c6a00-b957-11eb-9f9d-a922db2b7512.png)

This page shows the reason why I created this web application. To show my appreciation for my younger sister, I hope this project helped brighten her day through these tough times.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Kimberly Chuc - [Personal Portfolio](https://kimberlychuc.com/#/) - kimmchuc@gmail.com

Project Link: [Heroku Link](https://tracybday.herokuapp.com/#/) - [Github Link](https://github.com/kmchuc/tracybday)
