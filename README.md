# React based Image Gallery
Front-end only react based image gallery, which features a grid of images and a search, to view even more images from Flickr.

## Packages and resources
- React - latest build v15
- Babel
- Material design lite - for the grid and overall design
- Material docs -> https://getmdl.io/
- Public photo & video flickr api URL - https://api.flickr.com/services/feeds/photos_public.gne
- Docs for flickr api -> https://www.flickr.com/services/feeds/

## Getting started
- Clone repo
- cd into directory and npm install

### Get and use Flickr API Key
- Visit https://www.flickr.com/services/apps/create/apply and apply for a Key
- create a .env file in the root folder
- Paste your key as a variable - FLICKRAPIKEY=xxxxxxx

## Run / view
- npm run start
- visit localhost:8000/src/client/

## TODO / issues
1. React Application layout with router
2. Separate out layout to components
3. Tests for react components!
4. Offline image viewing - using Service Workers.
5. Display images on actual load (not on render)
6. Past 5 searches? :O (maybe)
