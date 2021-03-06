// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
  	this.render();
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    //return this.$el;
    this.$el.children().detach();

    this.$el.html('<th colspan="3" align="center">Song Queue</th>').append(
    	this.collection.map(function(song){
	    	return new SongQueueEntryView({model: song}).render();
    	})
    )
  }

});