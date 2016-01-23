// var game = new Phaser.Game(800 , 600 , Phaser.AUTO, 'gameCanvas', { preload: preload, create: create, update: update, render: render });

//Function for counting object size
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function preload()
{

    //game.load.spritesheet('balls', 'assets/sprites/balls.png', 17, 17);

}

var handle1;
var handle2;
var line1;



function create() {

    /* var LoadStack= function ()
    {
      var myFirebaseRef = new Firebase("https://neuropia.firebaseio.com/");
      var deferred = Q.defer();
      myFirebaseRef.child("McGill").once("value", function(snapshot)
        {
          var imageStack=snapshot.val();  // Alerts "San Francisco"
          var nameCount=1;
          for (var key in imageStack )
          {
            var dataURI = 'data:image/png;base64,' + String(imageStack[key].Content) ;
            var data = new Image();
            //console.log(dataURI);
                data.src = dataURI;
                game.cache.addImage('image-data-'+String(nameCount), dataURI, data);
                nameCount++;
                if (nameCount = Object.size(imageStack)) deferred.resolve('StackLoaded');
          }
        });
        return deferred.promise;
    }; */
      game.stage.backgroundColor = '#454645';
      handle1 = game.add.sprite(100, 200, 'balls', 0);
      handle1.anchor.set(0.5);
      handle1.inputEnabled = true;
      handle1.input.enableDrag(true);

      handle2 = game.add.sprite(400, 300, 'balls', 0);
      handle2.anchor.set(0.5);
      handle2.inputEnabled = true;
      handle2.input.enableDrag(true);

      line1 = new Phaser.Line(handle1.x, handle1.y, handle2.x, handle2.y);
      // Add loaded image to game
      game.add.sprite(800, 600, 'image-data-1');

}

function update() {

    line1.fromSprite(handle1, handle2, false);

}

function render() {

  Phaser.Mouse.mouseDownCallback= function () {
    game.debug.text("Drag the handles", 32, 550);
    game.debug.geom(line1);
    game.debug.lineInfo(line1, 32, 32);

  };


    game.debug.pointer(game.input.mousePointer);
    game.debug.pointer(game.input.pointer1);


}
