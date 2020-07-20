const http = new easyHTTP;

const data = {
  title: 'Custom post', 
  body: 'This is a custom post'
};

// GET posts:
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// GET single post:
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// POST posts:
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// PUT posts:
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// DELETE posts:
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});