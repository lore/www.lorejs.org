# www.lorejs.org

This repository contains the code for the Lore website, hosted at [lorejs.org](http://www.lorejs.org), and is 
a [Gatsby](https://www.gatsbyjs.org/) application.

## Installation
You will need to have `node` and `npm` installed to work with this repo.

Once installed, clone the repo:

```
git clone https://github.com/lore/www.lorejs.org.git
```

Then install the packages:

```
npm install
```

## Running the Website
To set up the project for local development, run this command:

```
npm run develop
```

Then open a web browser and navigate to `http://localhost:8000`. 

The website is configured for hot-reloading, and will automatically reflect changes as you make them to the code, 
without the need to refresh the page.

## Building the Website
To build the website, run this command:

```
npm run build
```

This will create a `public` folder at the root of the project and all assest will be compiled and minified and 
copied to that folder. 
