//import YQL from "yql";
const API_KEY = 'dj0yJmk9b0FHY25zeGs3a1FNJmQ9WVdrOVVtNUNlamhRTnpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1mYw--';
const CLIENT_SECRET = '57bebdcd7ee74b83b8beeebd0a574fea0b0c38ba';
const BASE_URI = 'http://query.yahooapis.com/v1/public/yql/';
const QUERY = '?q=select%20*%20from%20weather.forecast%20where%20woeid=';
var results = '';
var location;

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


function populateListOfCities(citiesArray) {

  var list = document.createElement('ul');

  for(var i = 0; i < citiesArray.length; i++) { 

    var item = document.createElement('button');

    item.id = 'city';
    item.woeid = woeids[i];

    item.addEventListener('click', function() {
        updateCurrentCity(this.woeid)
    });

    item.appendChild(document.createTextNode(citiesArray[i]));
    list.appendChild(item);
  }

  return list;
}

function updateCurrentCity(woeid) {

    const fullQuery = BASE_URI + QUERY + woeid + '&format=json';
    
    $.getJSON(fullQuery, '2354490', function(result) {
      updateUI(result);
    });
}


function updateUI(jsonObject) {
    document.getElementById('currentCity').innerHTML = jsonObject.query.results.channel.location.city + ", " + jsonObject.query.results.channel.location.region;
    var list = document.createElement('ol');
    var index = '0';
    jsonObject.query.results.channel.item.forecast.forEach(function(oneDayForecast) {
        document.getElementById(index++).appendChild(document.createTextNode(oneDayForecast.date));
    })
}

function getCityName(woeid) {
    
    const fullQuery = BASE_URI + QUERY + woeid + '&format=json';
    
    $.getJSON(fullQuery, '2354490', function(result) {
      updateUI(result);
    });

    location = jsonObject.query.results.channel.location.city + ", " + jsonObject.query.results.channel.location.region;
}

document.getElementById('listOfCities').appendChild(populateListOfCities(cities));

