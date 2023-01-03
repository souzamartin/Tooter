class TootTagsController < ApplicationController
    def create
        params[:tags].map {|t| TootTag.create(tag_id: t[:id], toot_id: params[:toot_id])}
        head :no_content
    end
end