//import YQL from "yql";
const API_KEY = 'dj0yJmk9b0FHY25zeGs3a1FNJmQ9WVdrOVVtNUNlamhRTnpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1mYw--';
const CLIENT_SECRET = '57bebdcd7ee74b83b8beeebd0a574fea0b0c38ba';
const BASE_URI = 'http://query.yahooapis.com/v1/public/yql';
const QUERY = 'q=select%20*%20from%20weather.forecast%20where%20woeid=';
var results = '';

var woeids = [
    2354490,
	2359601,
	2424766,
	2459115,
	2442047,
	2490383 
]

var cities = [
    'Anchorage, AK',
    'Barrow, AK',
    'Houston, TX',
    'New York, NY',
    'Los Angeles, CA',
    'Seattle, WA'
]

// function YQLQuery(query, callback) {
//     this.query = query;
//     this.callback = callback || function(){};
//     this.fetch = function() {

//         if (!this.query || !this.callback) {
//             throw new Error('YQLQuery.fetch(): Parameters may be undefined');
//         }

//         var scriptEl = document.createElement('script'),
//             uid = 'yql' + +new Date(),
//             encodedQuery = encodeURIComponent(this.query.toLowerCase()),
//             instance = this;

//         YQLQuery[uid] = function(json) {
//             instance.callback(json);
//             delete YQLQuery[uid];
//             document.body.removeChild(scriptEl);
//         };

//         scriptEl.src = 'http://query.yahooapis.com/v1/public/yql?q='
//                      + encodedQuery + '&format=json&callback=YQLQuery.' + uid; 
//         document.body.appendChild(scriptEl);

//     };
// }

function populateListOfCities(citiesArray) {

  var list = document.createElement('ul');

  for(var i = 0; i < citiesArray.length; i++) { 

    var item = document.createElement('button');

    item.id = 'city';
    item.name = citiesArray[i];

    item.addEventListener('click', function() {
        updateCurrentCity(this.name)
    });

    item.appendChild(document.createTextNode(citiesArray[i]));
    list.appendChild(item);
  }

  return list;
}

function updateCurrentCity(cityName) {
    document.getElementById('currentCity').innerHTML = cityName;

    const fullQuery = BASE_URI + QUERY + '2354490';

    $.ajax({
        q: fullQuery,
        type: 'GET',
        format: 'json',
        success(response) {

            document.getElementById('forecastMessage').innerHTML = JSON.parse(response);
        }
      });
}

function getCityName(woeid) {
    
}

document.getElementById('listOfCities').appendChild(populateListOfCities(cities));

