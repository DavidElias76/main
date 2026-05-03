import Post from '../models/postsModel.js'

export const createPostsController = async (req, res) => {
    try {
        const {name, description, age} = req.body;
    
        if(!name || !description || !age) return res.status(400).json({ message: "Fill out all the fields"})
    
        const post = Post.create({ name, description, age}) // create the post in the database

        res.status(200).json({ message: "post added successfully", post})
        
    } catch (error) {
        res.status(500).json({ message: "internal server error", error: error.message})
    }   
}

// get all the posts
export const getAllPostsController = async (req, res) => {
    try {
        const getPosts = await Post.find(); // gets all the post from the database
        res.status(200).json(getPosts) // returns all the posts
        
    } catch (error) {
        res.status(500).json({ message: "internal server error", error: error.message})
    }
}

// update the posts
export const updatePostsController = async (req, res) => {
    try {
        const {id} = req.params; // get the id of the post we are updating

        if(Object.keys(req.body) === 0) return res.status(400).json({ message: 'No data provided for update'})

        const post = await Post.findByIdAndUpdate(id, req.body, {new: true}) // this finds the post with specific id and updates the posts with the data in the req.body

        if(!post) return res.status(404).json({ message: "post not found"});

        res.status(200).json({ message: "post updated successfully", post});
        
    } catch (error) {
         res.status(500).json({ message: "internal server error", error: error.message})
        
    }
}

// delete posts

export const deletePostsController = async (req, res) => {

    try {
        const { id } = req.params; // get the id of the post you want to delete
        
        const postDeleted = Post.findByIdAndDelete(id); //get the post wit the specific id and delete the post 

        if(!postDeleted) return res.status(404).json({ message: 'post not found'})

        res.status(200).json({ message: "Post deleted successfully"})
        
    } catch (error) {
        res.status(500).json({ message: "Internal Server error", error: error.message})
    }


}