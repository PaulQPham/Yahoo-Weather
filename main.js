//import YQL from "yql";
const apiKey = 'dj0yJmk9b0FHY25zeGs3a1FNJmQ9WVdrOVVtNUNlamhRTnpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1mYw--';
const url = 'http://query.yahooapis.com/v1/public/yql';
var query = 'q=select * from weather.forecast where woeid=';

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
}

function getCityName(woeid) {

}

document.getElementById('listOfCities').appendChild(populateListOfCities(cities));

