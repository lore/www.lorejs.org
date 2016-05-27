# Introduction

Welcome to the Lore tutorial.  This will walk you through the basics of using Lore with a step-by-step guide you can 
follow along with.

> <strong>NOTE:</strong> This tutorial is intended to point out Lore's ability to let you focus on your components
> and not building infrastructure (like actions and reducers). As such, much of the tutorial is focused on React
> itself, with the occasional bit Lore configuration or model creation to make the application functional. That means
> this tutorial is likely more interesting to developers new to React itself.
>
> If you'd like to see a more complex tutorial that <strong>really</strong> shows off what Lore can do, and what
> kinds of challenges it can help solve, 
> <a href="https://github.com/lore/lore/issues/90">there has been an issue created to suggest improvements</a>, expansions or
> an entirely separate tutorial. I'd love to hear what you would like to see demonstrated. Currently, I'm
> thinking there will be 3 tutorials in the future; one for people new to React, one for people that have built
> a small React application before, and one for people who have built and supported a large application (and are likely
> much more interested in how the framework helps to solve the harder challenges of supporting an evolving application).

### What You'll Build
This is the application we'll be building, the "Guessatron 5000". You type in the name of a color and submit it,
and when you click on that color the route will change. The Guessatron will fetch that color, look at the name,
and then attempt to show you a swatch of what that color actually looks like (it's all fake, don't get too excited).

![Lore Tutorial App](/assets/images/tutorial/step14-visual.png)

### Demonstrates
This tutorial will demonstrate the following features:

1. Creating a new project
2. Connecting components to your data store
3. Creating data
4. Routing

<strong>In the future</strong> (not present today), this tutorial will be expanded to include:

1. Deleting data
2. Launching modal dialogs
3. Editing data
4. Detecting and communicating state changes (how to know when data is being created, or a GET request returns a 
404 NOT FOUND from the server)

<!--**NOTE** Lore is NOT a replacement or alternative to Redux.  It is built **on top** of Redux and is merely a set of -->
<!--conventions and utilities to make developing React/Redux applications faster. The more comfortable you are with Redux, -->
<!--the less magical Lore will seem. Lore is intended to reduce the learning curve for React/Redux development, by applying-->
<!--reasonable conventions around the smaller pieces (Webpack, Redux, React-Router, publishing). Also, most of Lore's magic-->
<!--relies on the assumption that the API(s) your application is using follow certain conventions, mainly that they're -->
<!--a) flat, and b) behave consistently, similar data structures, etc. Much of the complexity in UI development comes from-->
<!--the API.  The more difficult and inconsitent the API is, the more you'll need to understand Redux, and more parts of-->
<!--Lore you will need to override.-->

## Next Steps

Start the [tutorial](./step-0a/).
