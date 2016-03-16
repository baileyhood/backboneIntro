var FormView = Backbone.View.extend({
  el: '.form-container',
  template: _.template(templates.addMovie),
  events: {
    'click .submitButton' : 'addMovie'
  },
  addMovie: function (event) {
    event.preventDefault();
    this.model.set({
      title: this.$el.find('.title').val() ,
      year: this.$el.find('.year').val(),
      img: this.$el.find('.img').val(),
      desc: this.$el.find('.desc').val(),
    });
    this.$el.find('input').val(''); //clearing input
    this.$el.find('textarea').val(''); //clearing input
    this.collection.add(this.model);
  },
  initialize: function () { //WTF?
    if(!this.model) {
         this.model = new MovieModel({});
       }
       this.render();
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});



var MovieView = Backbone.View.extend({
  tagName: 'article', //where to target
  template: _.template(templates.movie),
  templateEdit: _.template(templates.editMovie),
  events: {
    'click .delete': 'removeBook',
    'click .edit' : 'toggleEdit',
    'click .submit-edit' : 'editMovie'
  },

  toggleEdit: function () {
    this.$el.append(this.templateEdit(this.model.toJSON())).toggleClass();
  },

  editMovie: function () {
    event.preventDefault();
    this.model.set({
      title: this.$el.find('.title-edit').val() ,
      year: this.$el.find('.year-edit').val(),
      img: this.$el.find('.img-edit').val(),
      desc: this.$el.find('.desc-edit').val(),
    });
  },

  removeBook: function () {
    console.log("delete click working?");
   this.model.destroy();
  },

  initialize: function () {
     this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var markup = this.template(this.model.toJSON()); // would push model through template
    this.$el.html(markup); //adding to DOM $el is referring to 'article'
    return this; //ALWAYS have to return
  },
});



var ListView = Backbone.View.extend ({
  el: '.main-container',
  initialize: function () {
      this.addAll();
      this.listenTo(this.collection, 'update', this.addAll);
  },
  addOne: function (el) {
    var modelView = new MovieView({model: el}); //creating var for Movie View
    this.$el.prepend(modelView.render().el); // adding to DOM
  },
  addAll: function () {
    $('.main-container').html(''); //clearing DOM
    _.each(this.collection.models, this.addOne, this);
  }
});
