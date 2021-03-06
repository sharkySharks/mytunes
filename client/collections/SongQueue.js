// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
	
  
  //enqueue method
  initialize: function(){
  //listen for add event
	//activate listeners, immediately invoking  
  // this.on('add', this.enqueue());
	this.on('add', this.enqueue, this);
  this.on('dequeue', this.dequeue, this)
  this.on('ended', this.playNext, this)
   
  },

  enqueue: function(song){
  	if(this.length  === 1){
      this.playFirst();
    }
  },

  playFirst: function(){
  	// var topOfList = SongQueue.at(0);
    this.at(0).play();
    var plays = this.at(0).get('playCount');
    this.at(0).set({playCount: plays += 1})
    console.log(this.at(0).attributes);

  },
  dequeue: function(song){
    if(this.at(0) === song){
      this.playNext();
    } else {
      this.remove(song);
    }
  },
  playNext: function(){
    this.shift();
    if(this.length >= 1){
      this.playFirst();
    } else {
      this.trigger('stop');
    }

  }

});