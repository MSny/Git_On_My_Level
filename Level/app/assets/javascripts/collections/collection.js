// Basic Backbone Collection
console.log("collections");
  var UserCollection = Backbone.Collection.extend({
    model: User,
    urlRoot: '/user'
  });
  var EventCollection = Backbone.Collection.extend({
  	model: Event,
    initialize: function(models, args){
      this.url = function() { return args.user_url() + '/events'; };
    }
  });

  var SkillCollection = Backbone.Collection.extend({
  	model: Skill,
    url: '/users/'+userParam+'/skills'
    // initialize: function(models, args){
    //   this.url = function() { return args.user_url() + '/skills.json'; };
    // }
  });
// initialize a collection of Users
var users = new UserCollection();
var events = new EventCollection();
var skills = new SkillCollection();