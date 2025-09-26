const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const postsContainer =  document.getElementById("posts-container");

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const timeAgo = (time) => {
  const currentTime = new Date();     // Get current time
  const timePassed = new Date(time);  // Convert the provided time to a Date object

  // Get the difference in milliseconds
  const diffMs = currentTime - timePassed;

  // Convert milliseconds to minutes, hours, and days
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Return formatted time ago string
  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
};


const viewCount = (views) => {
  const numOfViews = Number(views);
  if(numOfViews >= 1000){
    return Math.floor(numOfViews / 1000) + "k"
  }else{
    return numOfViews;
  }
}

const forumCategory = (id) => {
  if(allCategories.hasOwnProperty(id)){
    const { category, className } = allCategories[id]; // access the category and classname property
    return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
  }else{
    return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
  }
}

// ensure avatarUrl is defined somewhere, e.g.
// const avatarUrl = "https://forum.freecodecamp.org";

const avatars = (posters, users) => {
  // normalize base (remove trailing slash if present)
  const base = typeof avatarUrl === "string" ? avatarUrl.replace(/\/$/, "") : "";

  return posters.map(poster => {
    const user = users.find(u => u.id === poster.user_id);

    // safety: skip if no matching user or no avatar_template
    if (!user || !user.avatar_template) return "";

    // replace size placeholder
    let avatarPath = user.avatar_template.replace("{size}", "30");

    // if it's not an absolute http/https URL...
    if (!/^https?:\/\//i.test(avatarPath)) {
      // protocol-relative (e.g. //cdn.site.com/...)
      if (avatarPath.startsWith("//")) {
        avatarPath = "https:" + avatarPath; // or use window.location.protocol if needed
      } else if (avatarPath.startsWith("/")) {
        // root-relative: prepend base without adding extra slash
        avatarPath = base + avatarPath;
      } else {
        // simple relative path: join with a single slash
        avatarPath = `${base}/${avatarPath}`;
      }
    }

    return `<img src="${avatarPath}" alt="${user.name}" />`;
  }).join("");
};


// the post is the object paseed as an argument
const showLatestPosts = (data) => {
  const { users, topic_list } = data;

  // Clear the container before adding new rows
  postsContainer.innerHTML = "";

  topic_list.topics.forEach(({ id, title, views, posts_count, slug, posters, category_id, bumped_at }) => {
    postsContainer.innerHTML += `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">${avatars(posters, users)}</div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${views}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>
    `;
  });
};
 

async function fetchData() {
  try {
    // Fetch data from the given URL
    const response = await fetch(forumLatest);

    // Parse the response as JSON
    const data = await response.json();

    // Call showLatestPosts with the parsed data
    showLatestPosts(data);
  } catch (error) {
    // Log any errors to the console using console.log
    console.log(error);
  }
}