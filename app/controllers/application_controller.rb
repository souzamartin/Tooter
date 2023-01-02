class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    

    before_action :authorize

    private
    def authorize
        return render json: {error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

    def invalid_response(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def not_found_response
        render json: {error: "Not found"}, status: :not_found
    end
end
