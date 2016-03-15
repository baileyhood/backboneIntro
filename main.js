
$(document).ready(function() {
  var movieCollection = new MovieCollection(movies);
  new ListView ({collection: movieCollection});
  var formMarkup = new FormView({collection: movieCollection});
});





//Weesie sent me this: putting edit form in template VS in HTML like how I did it
// templates.edit =[
//   '<input type="text" name="title" value="<%= movie.title %>" placeholder="Title">',
//   '<input type="text" name="author" value="<%= movie.author %>" placeholder="Director">',
//   '<input type="text" name="image" value="<%= movie.coverImg %>" placeholder="Image">',
//   '<input type="text" name="date" value="<%= movie.date %>" placeholder="Date">',
//   '<input class="create "type="button" name="create" value="Create">'
// ].join('');








// var editForm = $('.edit-form');
// var movieCollection = new MovieCollection (movies);
//
// var page = {
//   init: function () {
//     page.events();
//     page.styling();
//   },
//   styling: function () {
//     page.addAll();
//   },
//   events: function () {
//     $('.main-container').on('click','.delete', page.deleteModel);
//     $('#submit-button').on('click', page.getInputFromDom);
//     $('.main-container').on('click', '.edit', page.displayEditForm);
//     $('.main-container').on('click', '#submit-edit-button', page.getEditInputFromDom);
//   },
//   movieTmpl: _.template(templates.movie),
//
//
// ////////////////////////
// ///ADDING TO DOM
// ////////////////////////
//
//   addOne: function (el) {
//     el.attributes.id = el.cid; //assigning the model's cid to it's attributes
//     var markup = page.movieTmpl ({movie: el.toJSON()});
//     $('.main-container').prepend(markup);
//   },
//
//   addAll: function () {
//      $('.main-container').html(''); //clearing 'container'
//      _.each(movieCollection.models, page.addOne);
//   },
//
// ////////////////////////
// ///DELETING FROM DOM
// ////////////////////////
//
//   deleteModel: function (event) {
//     event.preventDefault();
//     var movieID = $(this).closest('article').data('id');
//     console.log (movieID);
//     movieCollection.remove(movieID);
//     page.addAll();
//   },
//
// ////////////////////////
// ///CREATING FOR DOM
// ////////////////////////
//
// getInputFromDom: function () {  //getting input and adding to models
//   event.preventDefault();
//   var title = $('input[name="title"]').val();
//   var year = $('input[name="year"]').val();
//   var img = $('input[name="img"]').val();
//   var desc = $('input[name="desc"]').val();
//    var newMovieInfo = {
//      title: title,
//      year: year,
//      img: img,
//      desc: desc
//    };
//   movieCollection.add(newMovieInfo);
//   page.addAll();
// },
//
// ////////////////////////
// ///EDITING
// ////////////////////////
//
// displayEditForm: function (){
// event.preventDefault();
// $('.edit-form').removeClass('inactive');
// if ($(this).parents().data('id')) {
// $(this).siblings('.edit-container').append(editForm);
// }
// },
//
// getEditInputFromDom: function () {
//   event.preventDefault();
//   var title = $('input[name="title-edit"]').val();
//   var year = $('input[name="year-edit"]').val();
//   var img = $('input[name="img-edit"]').val();
//   var desc = $('input[name="desc-edit"]').val();
//   var editedMovieInfo = {
//      title: title,
//      year: year,
//      img: img,
//      desc: desc
//    };
//    var movieId = $(this).closest('article').data('id');
//    console.log(movieId);
//    movieCollection.get(movieId).set(editedMovieInfo);
//    page.addAll();
// }
//
//
//
// }; //end of 'page'
