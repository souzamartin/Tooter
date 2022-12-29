class TootsController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index 
        render json: Toot.all, status: :ok
    end

    def destroy
        toot = Toot.find(params[:id])
        toot.destroy 
        head :no_content
    end
    
end
