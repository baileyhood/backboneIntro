var templates = {};
templates.movie = [
  // "<article data-id = '<%= id %>'>",
  "<img src = '<%= img %>'>",
  "<div class = 'add-movie-text-container'>",
  "<h3> <%= title %> </h3>",
  "<p><%= year %></p>",
  "<p><%= desc %></p>",
  "<div class = 'delete-edit-button-section' >",
  "<button class = 'delete btn btn-default'> delete </button>",
  "<button class = 'edit btn btn-default'> edit </button>",
  "</div>",
  "</div>",
  "</article>"
].join('');

templates.addMovie = [
  '<h3>Add a Movie</h3>',
  '<form class = "">',
  '<input class="title form-control" type="text" placeholder = "Enter Title" value="">',
  '<input class="year form-control" type="text" placeholder = "Enter Year" value="">',
  '<input class="img form-control" type="text" placeholder = "Enter Image Link" value="">',
  '<textarea class="desc form-control" placeholder = "Enter Description" value=""> </textarea>',
  '<button class="submitButton btn btn-default" name="name" value="Submit">Submit</button>',
  '</form>',
].join('');

templates.editMovie = [
'<input class = "title-edit form-control" type="text" value = <%= title %> >',
'<input class = "year-edit form-control" type="text" value = <%= year %> >',
'<textarea class = "desc-edit form-control"  value = <%= desc %> > </textarea>' ,
'<input class = "img-edit form-control" type="text" value = <%= img %> >',
'<input type = "button" class= "submit-edit btn btn-default" value="Submit">',

].join('');
