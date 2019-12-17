module Api
  module V1
    class SocietiesController < ApplicationController
      include ActionController::MimeResponds

      before_action :authenticate_api_v1_user!

        def index
          p current_api_v1_user
          @societies = Society.all
          respond_to do |format|
            format.json { render :json => @societies}
            format.html { render :json => @societies}
          end
        end
    end
  end
end