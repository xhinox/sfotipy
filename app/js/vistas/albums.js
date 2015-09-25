Sfotipy.Views.Albums = Backbone.View.extend({
	// Definir el elemento donde se va a renderizar la vista
	el : $('#albums');

	// Inicializamos el template con el elemento señalado
	template : Handlebars.compile( $('#album-template').html() ),

	// Ahora se usa el evento ADD, para indicar que si llegan
	// a agregar un elemento este automaticamente ejecutara el 
	// metodo addOne
	initialize : function(){
		this.listenTo(this.collection, 'add', this.addOne, this);
	},

	// El evento render, lo que hara sera recorrer toda la 
	// colecion y a cada uno de los elementos de la coleccion
	// sera ejecutar el metodo addone
	render : function(){
		this.collection.forEach(this.addOne, this);
	},

	// Crear una nueva vista de album, le pasa el modelo del 
	// album y lo agregara al elemento html
	addOne : function (album) {
		var albumView = new Sfotipy.Views.Album({ model : album });
		// el append a diferencia del elemento html, puede agregar
		// elementos al render, si fuera solo el html, estaria
		// mandando una sola cancion
		this.$el.append(albumView.render().el);
	}
});	