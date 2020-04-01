/**
    Calculates the number of business days for a given date period. 
    Note that subdivision is optional.
**/
function calcBusinessDays(country, subdivision, date1, date2) {
    if (!country || !date1 || !date2) {
        return '';
    }
  
    var apiToken = "INSERT YOUR API TOKEN HERE";
    var url = "https://holidayoracle.io/api/v1/date/business-days?date1=" + date1 + "&date2=" + date2 + "&country=" + country + "&api_token=" + apiToken;
    if (subdivision) {
        url += "&subdivision=" + subdivision;
    }
    var response = UrlFetchApp.fetch(url);
    var data = JSON.parse(response.getContentText());
    return data.data.business_days;
}