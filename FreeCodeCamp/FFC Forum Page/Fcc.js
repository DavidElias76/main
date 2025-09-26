
const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const postsContainer = document.getElementById("posts-container");

const allCategories = {

  299: { 
    category: 'Career Advice', 
    className: 'career' 
},
  409: { 
    category: 'Project Feedback', 
    className: 'feedback' 
},
  417: { 
    category: 'freeCodeCamp Support', 
    className: 'support' 
},
  421: { 
    category: 'JavaScript', 
    className: 'javascript' 
},
  423: { 
    category: 'HTML - CSS', 
    className: 'html-css' 
},
  424: { 
    category: 'Python', 
    className: 'python' 
},
  432: { 
    category: 'You Can Do This!', 
    className: 'motivation' 
},
  560: { 
    category: 'Backend Development', 
    className: 'backend' 
}

};

const timeAgo = (time) => {

  const currentTime = new Date();
  const timePassed = new Date(time);

  const diffMs =  currentTime - timePassed;

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if(minutes < 60){
    return `${minutes} ago`;
  }else if(hours < 24){
    return `${hours} ago`
  }else{
    return `${days}}`
  }
}

const viewCount = (views) => {
  const NumOfViews =  Number(views);

  if(NumOfViews >= 1000){
    return Math.floor(NumOfViews / 1000) + "k"
  }else{
    return NumOfViews;
  }
}

const forumCategory = (id) => {
  if(allCategories.hasOwnProperty(id)){
    const {category, className} = allCategories[id];
    return `<a class = "category ${className}" href = "${forumCategoryUrl}/${className}/${id}">${category}</a>`
  }
  else{
    return `<a class = "category general" href = "${forumCategoryUrl}/${className}/${id}">General</a>`
  }
}


const avatars = (posters, users) => {
  const base = typeof avatarUrl === "string" ? avatarUrl.replace(/\/$/, "") : ""; // replaces tha part of the url that ends with a forward slash(/) with  an empty string
  
  return posters.map((poster) => {

    const user = users.find(u => u.id === posters.user_id)

    const avatarPath =  user.avatar_template.replace("{size}", "30");

    const regexPattern = !/^https?:\/\//i; // check if the avatar url has https

    if(regexPattern.test(avatarPath)){

      if(avatarPath.startsWith("//")){
         avatarPath = "https:" + avatarPath
      }
      else if(avatarPath.startsWith("/")){
        avatarPath = base + avatarPath
      }
      else{
        avatarPath = `${base}/${avatarPath}`;
      }
    }
    return `<img src = "${avatarUrl}/${avatar_template}" alt = "${user.name}"/>`
  }).join('');
}

const showLatestPosts = (data) => {
  const {users, topic_list} = data;
  
  postsContainer.innerHTML = "" ; // reset the container

  topic_list.topics.forEach(({ id, title, views, posts_count, slug, posters, category_id, bumped_at }) =>  {

    postsContainer.innerHTML += `
      <tr>
        <td>
          <a class = "post-title" href = "${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)};
        </td>
        <td>
          <div class = "avatar-container">${avatars(posters, users)}</div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${views}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>
    `
  })
}

async function fetData() {
  try{
    const response = await fetch(forumLatest);
    const data =  await response.json();
    showLatestPosts(data);
  }
  catch(error){
    console.log(error);
  }
}

// THE CODE WITH EXPLANATION
    
// const timeAgo = (time) => {

//   const currentTime =  new Date();// get the current time in milliseconds
//   const timePassed = new Date(time); // convet the time to an object to milliseconds

//   // get the difference in millseconds
//   const diffMs = currentTime - timePassed; 

//   // get the minutes hours and days 
//   const minutes = Math.floor(diffMs / (1000 * 60));
//   const hours = Math.floor(diffMs / (1000 * 60 * 60));
//   const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

//   if(minutes <  60){
//     return `${minutes} ago`
//   }
//   else if(hours < 24){
//     return `${hours} ago`
//   }
//   else{
//     return `${days} ago`
//   }

// }

// // views count function
// const viewCount = (views) => {
  
//   // convert the views to a number
//   const numOfViews = Number(views);

//   if(numOfViews >= 1000){
//     return (numOfViews / 1000) + "k";
//   }
//   else{
//     return numOfViews;
//   }
// }

// // forum category function
// const forumCategory = (id) => {

//   if(allCategories.hasOwnProperty(id)){
//     const {category, classname} = allCategories[id]; // access the category and classname of the specific object
//     return  `<a class = "category ${classname}" href = "${forumCategoryUrl}${classname}/${id}">${category}</a>`
//   }
//   else{
//     return `<a class = "category general" href = "${forumCategoryUrl}/general/${id}">General</a>`
//   }

// }

// // avartar function
// // posters and users are both array of objects
// // poster has the user_id property and users array has the id property  

// // ensure avatarUrl is defined somewhere, e.g.
// // const avatarUrl = "https://forum.freecodecamp.org";

// const avatars = (posters, users) => {
//   // normalize base (remove trailing slash if present)
//   const base = typeof avatarUrl === "string" ? avatarUrl.replace(/\/$/, "") : ""; // replaces tha part of the url that ends with a forward slash(/) with  an empty string

//   return posters.map(poster => {
//     const user = users.find(u => u.id === poster.user_id); // check is the user.id and the poster.user_id match

//     // safety: skip if no matching user or no avatar_template
//     if (!user || !user.avatar_template) return "";

//     // replace size placeholder
//     let avatarPath = user.avatar_template.replace("{size}", "30");

//     const regexPattern = !/^https?:\/\//i; // checks if the pattern is the url starts with the http/https followed by 2 forward slashes

//     // EXMAPLE OF URL: //cdn.site.com/avatars/{size}/bob.png

//     // if it's not an absolute http/https URL...
//     if (regexPattern.test(avatarPath)) {
//       // protocol-relative (e.g. //cdn.site.com/...)
//       if (avatarPath.startsWith("//")) {
//         avatarPath = "https:" + avatarPath; // add https if the url start with forward slashes
//       } else if (avatarPath.startsWith("/")) {
//         avatarPath = base + avatarPath; // root-relative: prepend base without adding extra slash. Removes the single forward slashes and  
//       } else {
//         // simple relative path: join with a single slash
//         avatarPath = `${base}/${avatarPath}`;
//       }
//     }

//     return `<img src="${avatarPath}" alt="${user.name}" />`;
//   }).join("");
// };

// // base = "https://forum.freecodecamp.org";
// // avatarPath = "avatars/user123.png";
 

// // post object passed an an argument
// const showLatestPosts = (data) => {
//   const { users, topic_list } = data;

//   // Clear the container before adding new rows and reseting the div which can cause duplicate rows.
//   postsContainer.innerHTML = "";

//   topic_list.topics.forEach(({ id, title, views, posts_count, slug, posters, category_id, bumped_at }) => {
//     postsContainer.innerHTML += `
//       <tr>
//         <td>
//           <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
//           ${forumCategory(category_id)}
//         </td>
//         <td>
//           <div class="avatar-container">${avatars(posters, users)}</div>
//         </td>
//         <td>${posts_count - 1}</td>
//         <td>${views}</td>
//         <td>${timeAgo(bumped_at)}</td>
//       </tr>
//     `;
//   });
// };

// async function fetchData() {
//   try {
//     // Fetch data from the given URL
//     const response = await fetch(forumLatest);

//     // Parse the response as JSON
//     const data = await response.json();

//     // Call showLatestPosts with the parsed data
//     showLatestPosts(data);
//   } catch (error) {
//     // Log any errors to the console using console.log
//     console.log(error);
//   }
// }


// // // posters object
// // const posters = [
// //   { user_id: 1 },
// //   { user_id: 2 },
// //   { user_id: 3 }
// // ];
// // // users array with relative paths
// // const users = [
// //   { id: 1, name: "Alice", avatar_template: "avatars/{size}/alice.png" },
// //   { id: 2, name: "Bob", avatar_template: "cdn.site.com/avatars/{size}/bob.png" },
// //   { id: 3, name: "Charlie", avatar_template: "avatars/{size}/charlie.png" }
// // ];