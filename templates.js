var templates = {};
templates.movie = [
  // "<article data-id = '<%= id %>'>",
  "<img src = '<%= img %>'>",
  "<h3> <%= title %> </h3>",
  "<p><%= year %></p>",
  "<p><%= desc %></p>",
  "<button class = 'delete'> delete </button>",
  "<button class = 'edit'> edit </button>",
  "<div class = 'edit-container'> </div>",
  "</article>"
].join('');

templates.addMovie = [
  '<form class = "">',
  '<input class="title" type="text" placeholder = "Enter Title" value="">',
  '<input class="year" type="text" placeholder = "Enter Year" value="">',
  '<input class="img" type="text" placeholder = "Enter Image Link" value="">',
  '<textarea class="desc" placeholder = "Enter Description" value=""> </textarea>',
  '<input type="button" class="submitButton" name="name" value="Submit">',
  '</form>',
].join('');

templates.editMovie = [
'<input class = "title-edit" type="text" value = <%= title %> >',
'<input class = "year-edit" type="text" value = <%= year %> >',
'<textarea class = "desc-edit"  value = <%= desc %> > </textarea>' ,
'<input class = "img-edit" type="text" value = <%= img %> >',
'<input type = "button" class= "submit-edit" value="Submit">',

].join('');
