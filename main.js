
var templates = {};
templates.movie = [
  "<article data-id = '<%= movie.id %>'>",
  "<img src = '<%= movie.img %>'>",
  "<h3> <%= movie.title %> </h3>",
  "<p><%= movie.director %></p>",
  "<p><%= movie.desc %></p>",
  "<button class = 'delete'> delete </button>",
  "<button class = 'edit'> edit </button>",
  "<div class = 'edit-container'> </div>",
  "</article>"
].join('');

$(document).ready(function() {
  page.init();
});
var editForm = $('.edit-form');
var movieCollection = new MovieCollection (movies);

var page = {
  init: function () {
    page.events();
    page.styling();
  },
  styling: function () {
    page.addAll();
  },
  events: function () {
    $('.main-container').on('click','.delete', page.deleteModel);
    $('#submit-button').on('click', page.getInputFromDom);
    $('.main-container').on('click', '.edit', page.displayEditForm);
    $('.main-container').on('click', '#submit-edit-button', page.getEditInputFromDom);
  },
  movieTmpl: _.template(templates.movie),


////////////////////////
///ADDING TO DOM
////////////////////////

  addOne: function (el) {
    el.attributes.id = el.cid; //assigning the model's cid to it's attributes
    var markup = page.movieTmpl ({movie: el.toJSON()});
    $('.main-container').append(markup);
  },

  addAll: function () {
     $('.main-container').html(''); //clearing 'container'
     _.each(movieCollection.models, page.addOne);
  },

////////////////////////
///DELETING FROM DOM
////////////////////////

  deleteModel: function (event) {
    event.preventDefault();
    var movieID = $(this).closest('article').data('id');
    console.log (movieID);
    movieCollection.remove(movieID);
    page.addAll();
  },

////////////////////////
///CREATING FOR DOM
////////////////////////

getInputFromDom: function () {  //getting input and adding to models
  event.preventDefault();
  var title = $('input[name="title"]').val();
  var director = $('input[name="director"]').val();
  var img = $('input[name="img"]').val();
  var desc = $('input[name="desc"]').val();
   var newMovieInfo = {
     title: title,
     director: director,
     img: img,
     desc: desc
   };
  movieCollection.add(newMovieInfo);
  page.addAll();
},

////////////////////////
///EDITING
////////////////////////

displayEditForm: function (){
event.preventDefault();
console.log ($(this).parents().data('id'));
if ($(this).parents().data('id')) {
$(this).siblings('.edit-container').append(editForm);
}
},

getEditInputFromDom: function () {
  event.preventDefault();
  var title = $('input[name="title-edit"]').val();
  var director = $('input[name="director-edit"]').val();
  var img = $('input[name="img-edit"]').val();
  var desc = $('input[name="desc-edit"]').val();
  var editedMovieInfo = {
     title: title,
     director: director,
     img: img,
     desc: desc
   };
   var movieId = $(this).closest('article').data('id');
   console.log(movieId);
   movieCollection.get(movieId).set(editedMovieInfo);
   page.addAll();
}



}; //end of 'page'
