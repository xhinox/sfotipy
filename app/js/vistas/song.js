// Vista de la cancion asociada al namespace
Sfotipy.Views.Song = Backbone.View.extend({

	// nombre de la etiqueta
	tagName : 'li',

	// la clase que tiene el elemento antes mencionado
	className : 'item border-bottom',

	// los eventos que se escucharan
	events : {
		'click .action.icon-add' : 'select',
		'click .action.icon-love' : 'love',
		'click .action.icon-share' : 'share'
	},

	// el template del html que dejamos en la etiqueta script
	template : Handlebars.compile( $('#song-template').html() ),

	// se inicializa el proyecto
	initialize : function() {
		this.listenTo(this.model, 'change', this.render, this);
	},

	// Se hace el renderizado de la cancion via JSON
	render : function() {
		var song = this.model.toJSON()
		var html = this.template(song);
		this.$el.html(html);
		return this
	},

	// Eventos SELECT, obtiene la vista del reproductor
	// actualiza el modelo interno de la vista
	select : function(){
		Sfotipy.app.player.model.set(this.model.toJSON());
		return false
	},

	love : function(){

	},

	share : function(){

	}
});