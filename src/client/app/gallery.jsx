import React from 'react';
import {render} from 'react-dom';

// photo component..
class Photo extends React.Component {
  render() {
    return (
      <div className='photo mdl-card mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-shadow--2dp'>
        <img src={this.props.src} />

        <div className='mdl-card__title'>
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

// photo grid..
class PhotoGrid extends React.Component {
  render() {
    var photos = this.props.photos.map( (photo) => {
      return <Photo key={photo.author_id} src={photo.media.m} title={photo.title} />;
    });

    return (
			<div className='photo-grid mdl-grid'>
        {photos}
      </div>
    );
  }
}


// test data...from flickr api
var data = [
  	   {
			"title": "Leica Q (Typ 116) : December 4, 2016",
			"url": "https:\/\/www.flickr.com\/photos\/sotome\/30624837144\/",
			"media": {"m":"https:\/\/farm6.staticflickr.com\/5595\/30624837144_cfca1be9c4_m.jpg"},
			"date_taken": "2016-12-04T15:54:42-08:00",
			"description": " <p><a href=\"https:\/\/www.flickr.com\/people\/sotome\/\">takuhitofujita<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/sotome\/30624837144\/\" title=\"Leica Q (Typ 116) : December 4, 2016\"><img src=\"https:\/\/farm6.staticflickr.com\/5595\/30624837144_cfca1be9c4_m.jpg\" width=\"160\" height=\"240\" alt=\"Leica Q (Typ 116) : December 4, 2016\" \/><\/a><\/p> <p>Leica Q (Typ 116) \/ L1030910.JPG<\/p>",
			"published": "2016-12-06T18:49:02Z",
			"author": "nobody@flickr.com (\"takuhitofujita\")",
			"author_id": "95795770@N00",
			"tags": "eyefi eyeficloud flickr leicaqtyp116"
	   },
	   {
			"title": "ATS_5622.jpg",
			"url": "https:\/\/www.flickr.com\/photos\/deltorosanchezantonio\/30657790293\/",
			"media": {"m":"https:\/\/farm6.staticflickr.com\/5503\/30657790293_aef293a682_m.jpg"},
			"date_taken": "2016-12-04T17:11:10-08:00",
			"description": " <p><a href=\"https:\/\/www.flickr.com\/people\/deltorosanchezantonio\/\">deltorosanchezantonio<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/deltorosanchezantonio\/30657790293\/\" title=\"ATS_5622.jpg\"><img src=\"https:\/\/farm6.staticflickr.com\/5503\/30657790293_aef293a682_m.jpg\" width=\"240\" height=\"160\" alt=\"ATS_5622.jpg\" \/><\/a><\/p> ",
			"published": "2016-12-06T18:49:05Z",
			"author": "nobody@flickr.com (\"deltorosanchezantonio\")",
			"author_id": "116852937@N03",
			"tags": ""
	   },
	   {
			"title": "naamloos-4.jpg",
			"url": "https:\/\/www.flickr.com\/photos\/vanheun-gooren\/30657790713\/",
			"media": {"m":"https:\/\/farm6.staticflickr.com\/5560\/30657790713_54ce35d79f_m.jpg"},
			"date_taken": "2016-11-30T21:45:38-08:00",
			"description": " <p><a href=\"https:\/\/www.flickr.com\/people\/vanheun-gooren\/\">PW van Heun<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/vanheun-gooren\/30657790713\/\" title=\"naamloos-4.jpg\"><img src=\"https:\/\/farm6.staticflickr.com\/5560\/30657790713_54ce35d79f_m.jpg\" width=\"240\" height=\"160\" alt=\"naamloos-4.jpg\" \/><\/a><\/p> ",
			"published": "2016-12-06T18:49:06Z",
			"author": "nobody@flickr.com (\"PW van Heun\")",
			"author_id": "68478008@N00",
			"tags": "concert kaleo photopetervanheun live music paradiso"
	   }
];


// basic 3 photos?
const Grid = (
	<PhotoGrid photos={data}></PhotoGrid>
);

render(Grid, document.getElementById('app'));
