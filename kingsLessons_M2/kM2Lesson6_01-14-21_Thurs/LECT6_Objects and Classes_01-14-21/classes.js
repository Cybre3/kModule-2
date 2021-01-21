class Post {

  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
  }
//   constructor(title = 'No Title', content, author) {      // if no title is passed, you can pass a defualt value
//     this.title = title;
//     this.content = content;
//     this.author = author;
//   }

  renameTitle(newTitle) {
      this.title = newTitle;
  }
  updatePost(newTitle, newContent, author) {
    this.title = newTitle;
    this.content = newContent;
    this.author = author;
  }
}

let newPost1 = new Post('New Post', 'New Post Content', 'John Doe');
console.log(newPost1);
let newPost2 = new Post('New Post', 'New Post Content', 'Mike');

newPost1.renameTitle('This is a new Title ');
console.log(newPost1);

newPost2.updatePost('something new', 'something crazy', 'John Doe');
console.log(newPost2);


// think about it as a template or blueprint