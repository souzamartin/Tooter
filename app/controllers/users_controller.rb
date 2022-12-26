class UsersController < ApplicationController

    def check 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    private 
    

end
