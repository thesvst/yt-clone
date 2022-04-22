# Hellow :3

## Project configuration 
Stuff like ESLint, babel, webpack is mostly copied from my non-commercial project.
I know it is a bit over configured. I just did not want to use create react app and did not
want to spend much time on stack configuration.


## Folders structure
Starting from the source (src) folder the concept looks like: <br>

**@ui** - dumb stuff. Components, layouts, complex pages - no logic at all<br>
**common** - reusable not-jsx code i.e. utils, global types, assets<br>
**containers** - separated app logic. It should import template pages from @ui/pages<br>
**public** - index.html template<br>
