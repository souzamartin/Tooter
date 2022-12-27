class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def check 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end


    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id

        render json: user, status: :created
    end

    private 
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :avatar_img, :email)
    end
    

end
