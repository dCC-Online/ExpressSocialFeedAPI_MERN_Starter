const fs = require("fs");
const filePath = "data.json";
/**
 * @typedef Post
 * @type {object}
 * @property {number} id - The unique identifier for the post.
 * @property {string} name - The name of the post creator.
 * @property {string} post - The text content of the post.
 * @property {string} creationTime - The creation time of the post.
 * @property {string} status - The status of the post ('neutral', 'liked', 'disliked').
 */

/**
 * Returns all posts.
 * @returns {<Post[]> An array of Post objects.
 */
function getAll() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
        console.log(error);
      } else {
        var postData = JSON.parse(data);
        resolve(JSON.parse(data));
      }
    });
  });
}

/**
 * Returns a post by ID.
 * @param {number} id - The ID of the post to fetch.
 * @returns {<Post> The requested Post object.
 */
function getById(id) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        const items = JSON.parse(data);
        const item = items.find((i) => i.id === parseInt(id));
        if (!item) {
          reject(`Item with id '${id}' not found.`);
        } else {
          resolve(item);
        }
      }
    });
  });
}
/**
 * Updates a post by ID.
 * @param {Number} id - "id" of psot you want to update.
 * @param {Object} update - The contents of the body sent in with the PUT request.
 * @param {string} update.name - The name of the "post" creator.
 * @param {string} update.post - The text of the post.
 * @param {string} update.creationTime - The date of the post.
 * @param {string} update.status - The status of the post. Options: "neutral", "liked","disliked".
 * @returns {<Post> The updated Post object.
 */
function updateById(id, update) {
  id = parseInt(id);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        let items = JSON.parse(data);
        let itemIndex = items.findIndex((i) => parseInt(i.id) === id);
        if (itemIndex === -1) {
          reject(`Item with id '${id}' not found.`);
        } else {
          items[itemIndex] = { id, ...update };
          fs.writeFile(filePath, JSON.stringify(items), (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(update);
            }
          });
        }
      }
    });
  });
}
/**
 * Creates a new post.
 * @param {Object} post - The contents of the body sent in with the POST request.
 * @param {string} post.name - The name of the "post" creator.
 * @param {string} post.post - The text of the post.
 * @param {string} post.creationTime - The date of the post.
 * @param {string} post.status - The status of the post. Options: "neutral", "liked","disliked".
 * @returns {<Post> The newly created Post object.
 */
function create(post) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        let posts = JSON.parse(data);
        post.id = parseInt(posts.length + 1);
        posts.push(post);
        fs.writeFile(filePath, JSON.stringify(posts), (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(post);
          }
        });
      }
    });
  });
}
/**
 * Deletes a post by ID.
 * @param {number} id - The ID of the post to delete.
 * @returns {<Post> The deleted Post object.
 */
function deleteById(id) {
  id = parseInt(id);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        let items = JSON.parse(data);
        let itemIndex = items.findIndex((i) => i.id === id);
        if (itemIndex === -1) {
          reject(`Item with id '${id}' not found.`);
        } else {
          let deletedPost = items.splice(itemIndex, 1);
          fs.writeFile(filePath, JSON.stringify(items), (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(deletedPost);
            }
          });
        }
      }
    });
  });
}
module.exports = {
  getAll,
  getById,
  updateById,
  create,
  deleteById,
};
