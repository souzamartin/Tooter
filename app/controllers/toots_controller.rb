class TootsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def index 
        render json: Toot.all.order(created_at: :desc), status: :ok
    end

    def destroy
        toot = Toot.find(params[:id])
        toot.destroy 
        head :no_content
    end

    def increment_likes
        toot = Toot.find(params[:id])
        toot.update(likes: toot.likes + 1)
        render json: toot
    end

    private 

    def not_found_response
        render json: {error: "Toots not found"}, status: :not_found
    end
end
