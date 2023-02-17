const TenDay = () => {
  return <div>10 day forecast</div>;
};


for (var i = 1; i < 6; i++) {
  //Automatically, using a for loop,  update the 5day forecast without having to call each day separately
  var icons = document.getElementById("pic" + [i]);
  var temp = document.getElementById("temp" + [i]);
  var wind = document.getElementById("wind" + [i]);
  var humdity = document.getElementById("humdity" + [i]);
  // console.log(i)

  dailycurrentIcon = data.list[i].weather[0].icon;
  dailyIcons = `https://openweathermap.org/img/wn/${dailycurrentIcon}.png`;
  icons.src = dailyIcons;

  temp.textContent = data.list[i].main.temp + " °F";

  wind.textContent = data.list[i].wind.speed + " MPH";

  humdity.textContent = data.list[i].main.humidity + " %";
}

export default TenDay;
