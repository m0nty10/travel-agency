//console.log('hello world!');

//console.log(2+2);

/*var fs = require('fs');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great!</h1>", function(error){
    if (error)  {
        return console.log(error);
    } else {
        return console.log("congrats")
    }
})

*/


var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great!</h1>", function(error){
    if (error)  {
        return console.log(error);
    } else {
        return console.log("congrats");
    }
});

var myPhotoLocation = 'https://images.pexels.com/photos/7945745/pexels-photo-7945745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
https.get(myPhotoLocation, function(response)   {
    response.pipe(fs.createWriteStream(__dirname + '/myGirl.jpg'));
});