## Currently exists over at https://gitlab.com/gching/felix-renderer

# felix-renderer

Used in conjunction with Felix Interactive's App Editor and App builder.

Uses some sort of virtual / hidden dom mechanism to assist in drawing the
front facing dom / view for the user.


Uses gulp to do testing and building. Check gulpfile.js for more information.

# Commands

## gulp karma
Uses karma to test on Chrome given the specs defined in tests.

## gulp browserify
Uses browserify to build the current node package into a build file. Build file
will live at ./public/build.js
