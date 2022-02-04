# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostController is a class which inherits from ApplicationController and has methods. It usesd for responding the request and returning the output
class BlogPostsController < ApplicationController
  def index
    # ---2) display a list of all blogposts
    @posts = BlogPost.all
  end

  def show
    # ---3) display a specific post (display specific id)
    @post = BlogPost.find(params[:id])
  end

  # ---4) return an HTML form for creating a new post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) creat a new post, has strick params to allow certain properties to be accessible 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) return an HTML form for editing a post, edit hash object based on id
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) update a specific post, has strick params to allow certain properties to be accessible 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) delete a specific post and let the user know if it's deleted
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Everyhthing below this private line is avaiable for the class itself (local) and has security to the database by not be accessed in the routes.
  private
  def blog_post_params
    # ---10) The params requires an argument (:blog_post) and allow the user get the information of an object and return the value :title, :content
    params.require(:blog_post).permit(:title, :content)
  end
end
