class TagsController < ApplicationController

    def create 
        render json: Tag.create!(tag_params), status: :created

    end
    
    private 

    def tag_params
        params.permit(:tag_text)
    end

end
