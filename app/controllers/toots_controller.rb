class TootsController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index 
        render json: Toot.all, status: :ok
    end
end
