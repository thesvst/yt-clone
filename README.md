# Hellow :3

## How to start (!)
Generate API key and set it as value of .env API_KEY variable

## More about configuration 
Stuff like ESLint, babel, webpack is mostly copied from my non-commercial project.
I know it is a bit over configured. I just did not want to use create react app and did not
want to spend much time on stack configuration.

## Styling
To be honest I did not focus much on styling. 
Wanted to develop as much logic features as possible. But I've started my webdev journey as a WordPress
developer. I feel comfortable in styling. <br/>
If there will be any need to do some CSS then **I will do some styling** but let's check JS first! :)

## Folders structure
Starting from the source (src) folder the concept looks like: <br>

**@ui** - dumb stuff. Components, layouts, complex pages - no logic at all<br>
**common** - reusable not-jsx code i.e. utils, global types, assets<br>
**containers** - separated app logic. It should import template pages from @ui/pages<br>
**public** - index.html template<br>
**core** - core functionalities (like RequestManager, ErrorLogger)
**public** - index.html template<br>
**styles** - global styles
**hooks** - no need to explain (:
