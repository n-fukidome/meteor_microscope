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
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('postsList', {path: '/'});
});