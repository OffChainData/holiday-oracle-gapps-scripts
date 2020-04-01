/**
    Returns holidays for a given country and date
**/
function checkForHolidays(country, date) {
  if (!country || !date) {
      return '';
  }
  
  var apiToken = "INSERT YOUR API TOKEN HERE";
  var url = "https://holidayoracle.io/api/v1/date?date=" + date + "&country=" + country + "&api_token=" + apiToken;
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  if (data.data.hasOwnProperty('holidays')) {
      var holidays = Object.keys(data.data.holidays).map(function (k) {
        return data.data.holidays[k].holiday_description;
      });
      return holidays.join(', ');
      return data.data.holidays[0].holiday_description;  
  }
  
  return 'No Holiday';
}
