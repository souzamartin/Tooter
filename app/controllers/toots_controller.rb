class TootsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
        render json: Toot.all.order(created_at: :desc), status: :ok
    end

    def create 
        user = User.find(session[:user_id])
        new_toot = user.toots.create!(toot_params)
        render json: new_toot, status: :created
    end

    def destroy
        toot = Toot.find(params[:id])
        toot.destroy 
        head :no_content
    end

    def increment_likes
        toot = Toot.find(params[:id])
        toot.update(likes: toot.likes + 1)
        render json: toot, status: :accepted
    end

    private 
    def toot_params 
        params.permit(:content, :likes)
    end
end
