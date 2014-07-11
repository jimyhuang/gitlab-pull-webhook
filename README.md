# Introduction

It listens to gitlab webhook push events and pulls repositories configured in config.js.
Currently, it runs on GNU/Linux and BSD OSes only, and it can only run in a startup script for now.

# Build & Runtime Dependencies

* nodejs >= 0.10.x
* npm >= 1.4.x

# Installation on ubuntu

* `cd any-installation-dir`
* `sudo git clone gitlab-pull-webhook-url`
* `cd gitlab-pull-webhook`
* `sudo npm install`
* 'npm start'
  * Copies config.js into the directory specified by configDir.js
  * Copies 'gitlab-pull-webhook' startup script to /etc/init
