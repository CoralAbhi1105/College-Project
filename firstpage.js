function updateMap() {
    console.log("Our map is Refresh is Real time after every 2 seconds")
  fetch("/data.json")
    .then((Response) => Response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.infected;
        
        if (cases>200){
            color = "rgb(255, 0, 0)";
        }

        else{
            color = `rgb(${cases}, 0, 0)`;
            
        }


        //mark on the mark
        new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

// let interval = 00;
// setInterval(updateMap, interval);

updateMap()
