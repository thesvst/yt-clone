# Hellow :3

## How to start (!)
Generate API key and set it as value of .env API_KEY variable

## More about configuration 
Stuff like ESLint, babel, webpack is mostly copied from my non-commercial project.
I know it is a bit over configured. I just did not want to use create react app and did not
want to spend much time on stack configuration.

## Shame wall
Well. I am not 100% proud of the project flow. The first mistake I made was visualization.
I thought SideBar (thumbnails) was a drawer. I opened main page YT page and I've started to planning project
based on this view so that's the reason.

The next thing is Storybook... Since I decided to use TypeScript I was not sure if I had
enough time to write components and its stories. And yup it was mistake because I think it took
me a bit longer. Would be way easier if I had ready pages and components.

## Styling
To be honest I did not focus much on styling. 
Wanted to develop as much logic features as possible. But I've started my webdev journey as a WordPress
developer (own-scratch templates, not editing existing ones) so I feel comfortable in styling. <br/>
If there will be any need to do some CSS then **I will do some styling** but let's check JS first! :)

## Folders structure
Starting from the source (src) folder the concept looks like: <br>

**@ui** - dumb stuff. Components, layouts, complex pages - no logic at all<br>
**common** - reusable not-jsx code i.e. utils, global types, assets<br>
**containers** - separated app logic. It should import template pages from @ui/pages<br>
**public** - index.html template<br>
**core** - core functionalities (like RequestManager, ErrorLogger)<br>
**public** - index.html template<br>
**styles** - global styles<br>
**hooks** - no need to explain (:
