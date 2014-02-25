AngularJS Movie Workshop
========================

An AngularJS workshop based on a movie-listing application.

See live preview at http://antoine-richard.github.io/angular-movie-workshop/

![screenshot](https://dl.dropboxusercontent.com/u/37908099/angular-movie-workshop/angular-movie-screen.png)

Backend 
-------

REST services (aka RESTarantino) for this workshop are documented [here](http://restarantino.herokuapp.com/index.html).

__If you want to replay this workshop, please host the backend on your own server.__ Sources of the backend are [available on Github](https://github.com/antoine-richard/restarantino).

Workshop steps
--------------

### Intro
_Starting point: [branch intro-start](https://github.com/antoine-richard/angular-movie-workshop/tree/intro-start)_

* application initialization
* databinding (ng-model, double curly brace)

[Diff](https://github.com/antoine-richard/angular-movie-workshop/compare/intro-start...intro-end)

### Step 1

_Starting point: [branch step-1-start](https://github.com/antoine-richard/angular-movie-workshop/tree/step-1-start)_

* insight of a given controller
* ng-repeat

[Diff](https://github.com/antoine-richard/angular-movie-workshop/commit/7f6b37089c388cdbe708c806bbf7367d697043ee)

### Step 2

_Continuing on previous step_

* server communication with $http (see the backend documentation)

[Diff](https://github.com/antoine-richard/angular-movie-workshop/commit/1e86b31baf585a77a37f87a965af8b3e3725930a)

### Step 3

_Continuing on previous step_

* filters (filter, orderBy)
* ng-init

[Diff](https://github.com/antoine-richard/angular-movie-workshop/compare/step-3-start...step-3-end)

### Step 4

_Starting point: [branch step-4-start](https://github.com/antoine-richard/angular-movie-workshop/tree/step-4-start)_  
_(moved HTML content from index to a partial, added a module)_

* insight of modules
* routes, ng-view

[Diff](https://github.com/antoine-richard/angular-movie-workshop/commit/d93e487c0be2e45d2cb7c0fa8ecfe55ebc510add)

### Step 5

_Continuing on previous step_

* controllers
* templates
* ng-src

[Diff](https://github.com/antoine-richard/angular-movie-workshop/compare/step-5-start...step-5-end)

### Step 6

_Continuing on previous step_

* ng-style (with a helper function)

[Diff](https://github.com/antoine-richard/angular-movie-workshop/commit/1bb0d013313e2487cb5d5281899f12bbcb98020d)

### Step 7

_Starting point: [branch step-7-start](https://github.com/antoine-richard/angular-movie-workshop/tree/step-7-start)_  
_(added service squeleton, added directive squeleton)_

* factory (and reminder of the JS module pattern)

[Diff](https://github.com/antoine-richard/angular-movie-workshop/compare/step-7-start...step-7-end)

### Step 8

_Continuing on previous step_

* animations (on ng-view and ng-repeat)

[Diff](https://github.com/antoine-richard/angular-movie-workshop/compare/step-8-start...step-8-end)

### Step 9

_Continuing on previous step_

* directive (save favorite movies in the localStorage)

[Diff](https://github.com/antoine-richard/angular-movie-workshop/compare/step-9-start...step-9-end)

### To be continued... 

(tests, build, etc.)

---

![mockup](https://dl.dropboxusercontent.com/u/37908099/angular-movie-workshop/angular-movie-mockup.png)
