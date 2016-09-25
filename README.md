# www.lorejs.org

Homepage for Lore hosted at [lorejs.org](http://www.lorejs.org).

# Installation
This is a [Jekyll](https://jekyllrb.com/) project. To run it you will need to have Ruby v2.x installed along with Node.

### Installing Ruby
First install [RVM](https://rvm.io/) for managing Ruby.

```
\curl -sSL https://get.rvm.io | bash -s stable
```

Next install Ruby:

```
rvm install 2.3
```

Once Ruby is installed you'll need to install Bundler:

```
gem install bundler
```

Now navigate to the root of the project and run `bundle install`. This will install all the Ruby dependencies that the project needs to run (such as Jekyll).

### Installing Node
If you don't already have Node installed, you can obtain it from http://nodejs.org.

As an alternative to downloading Node directly, you can also use one of the available Node Version Managers (NVMs). The
advantage of using these over installing Node directly is that they allow you to easily change which version of
Node you are using, which is especially helpful when you want to try see how code runs on a different version of Node,
or trying to discover if a bug you are seeing is related to a specific version of Node and/or NPM.

If you are on a Mac, you can use [nvm](https://github.com/creationix/nvm).

If you are on a Windows machine, you can use [nvm-windows](https://github.com/coreybutler/nvm-windows).

Once NVM is installed you can use it to install Node:

```
nvm install v6
```

Now navigate to the root of the project and run `npm install`. This will install all the Node dependencies that the project needs to run (such as gulp).

# Building the Website
To build the website you'll need to install gulp into the global namespace:

```
npm install -g gulp
```

Once gulp is installed you can build the project by running this command at the root of the project:

```
gulp
```

This will build the project and launch a web browser at `http://localhost:4000`. This gulp configuration using browser-sync and any file changes you make will cause the project to be rebuilt and the web browser will automatically be refreshed.
