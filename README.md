# Bornais Music Website

This is the official website for Bornais Music, built using Hugo.

![Bornais Music Logo](/static/logo.png)

*Music is life, freedom, happiness.*

## Setting up the Environment
### Installing Dependencies
First, make sure to [install hugo](https://gohugo.io/installation/), then after cloning this repository, install TailwindCSS and the other dependencies by running the following:
```sh
npm ci
```

### Serving the Website
To serve the website locally while developing, run two active terminals. In the first terminal, type the following:
```sh
hugo serve
```

In the second terminal, type the following:
```sh
npx tailwindcss -i ./css/global.css -o ./css/tailwind.css --watch
```