class TagsController < ApplicationController

    def create
        added_tags = params[:_json].map {|t| Tag.find_or_create_by!(tag_text: t)}
        render json: added_tags, status: :created
    end
    
    # private 

    # def tag_params
    #     params.permit(:tag_text)
    # end

end