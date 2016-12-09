import React from 'react';
import {render} from 'react-dom';


// test data...from flickr api
var data = [ //];
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


// photo component..
class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.src = '';
		this.title = 'Loading...';
		this.state = {'state': 'loading'};
  }


	componentDidMount() {
		// photo has been added to document
		// hide loading animation..
		// update state
		this.setState({'state': 'done'});
	}


  render() {
		if (this.state.state === 'loading') {
			// display a loading symbol if image hasn't loaded
			return (
				<div className='photo mdl-card mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-shadow--2dp'>
					<div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
				</div>
			);
		}

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
	constructor(props) {
		super(props);
		this.state = {
			'state': 'loading',
			'photos': []
		};
	}

	componentWillMount(){
		this.dataSource();
	}

	componentWillReceiveProps(nextProps){
		this.dataSource(nextProps);
	}

	dataSource(props) {
		props = props || this.props;

    return $.ajax({
      type: "get",
      dataType: 'json',
      url: "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=bcc3bbb71c12693b4f2fde281bd75cdd&format=json&jsoncallback=?"
    }).done(function(result) {
			console.info(result.stat);
      this.setState({
				'photos': result.photos.photo
			});
    }.bind(this));
	}


  render() {
		if (this.state.photos.length < 1) {
			return (<div> NOTHING!!!!</div>);
		}

    var photos = this.state.photos.map((photo) => {
			let photoSrc = "https://farm"+ photo.farm +".static.flickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +"_m.jpg";
      return <Photo key={photo.owner} src={photoSrc} title={photo.title} />;
    });

    return (
			<div className='photo-grid mdl-grid'>
        {photos}
      </div>
    );
  }
}


// search input
class SearchInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event) {
		// basic user validation
		if (!event.target.value) {
			return false;
		}

		console.info('Value');
		console.log(event.target.value);

		let url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bcc3bbb71c12693b4f2fde281bd75cdd"
			+ "&tags='" + event.target.value + "'" +
			"&format=json&jsoncallback=?";

		// url = url + event.target.value + "'";

		$.getJSON(url).then(function(data) {
		  debugger;
		})
		.catch(function(error) {
		  console.log('Issue trying to get..: ' + error.message);
		});
	}

  render() {
    return (
			 <input className='mdl-textfield__input' type="text" name="search" id="search" onChange={this.handleInput} />
    );
  }
}
// basic 3 photos?
const Grid = (
	<PhotoGrid photos={data}></PhotoGrid>
);

const Search = (
	<SearchInput />
);

render(Grid, document.getElementById('app'));
render(Search, document.getElementById('search-container'));
