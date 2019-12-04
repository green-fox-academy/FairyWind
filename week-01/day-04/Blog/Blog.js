'use strict';

const BlogPost = require('./Blog-post');

/**Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost
 */

 class Blog{
     constructor(){
         this.list = [];
     }

     add(blogposts){
         this.list.push(blogposts);
     }

     delete(int){
         this.list.splice(int, 1);
     }

     update(int, BlogPost){
         this.list.splice(int, 1, BlogPost);
     }
 }

const blog = new Blog();
blog.add(BlogPost[1]);
blog.add(BlogPost[2]);
blog.add(BlogPost[3]);
console.log(blog);
console.log('==================');
blog.delete(1);
console.log(blog);
console.log('==================');
const test = new BlogPost[0]('Sherry', 'Test', 'Just a test.', '2019.10.17');
blog.update(0, test);
console.log(blog);



