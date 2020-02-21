 var events = {
    "shows":  [{
              "date": "2/12",
              "time": "9:30pm",
              "venue": "Birds",
              "venuelink": "https://birdsoystershack.com/"
            }, {
                "date": "2/23",
                "time": "7:30pm",
                "venue": "Birds",
                "venuelink": "https://birdsoystershack.com/"
            }, {
                "date": "2/26",
                "time": "9:30pm",
                "venue": "Birds",
                "venuelink": "https://birdsoystershack.com/"
            }
    ]
}

$(document).ready(function(){

  var showTemplate = $("#show-template").html();

  var compiled = Handlebars.compile(showTemplate);
  console.log(compiled(events.shows[0]));

  $(".show-container").html(compiled(events));

}); 
  