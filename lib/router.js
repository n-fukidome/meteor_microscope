// Router.configure({
//   layoutTemplate: 'layout'
// });

// var PostsListController = RouteController.extend({
//         template: 'postsList'
//     });

// Router.map(function() {
//   this.route('postsList', {path: '/', controller: PostsListController});
// });

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
  this.route('postsList', {path: '/'});
});