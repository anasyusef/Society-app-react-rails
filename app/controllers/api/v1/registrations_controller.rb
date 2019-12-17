module Api
    module V1
      class RegistrationsController < ApplicationController
        include ActionController::MimeResponds
  
        before_action :authenticate_api_v1_user!
  
          def create
            @society = Society.find(params[:id])
            @registration = Registration.new(society: @society, user: current_api_v1_user)
            p current_api_v1_user
            
            if @registration.save!
                respond_to do |format|
                format.json { render :json => {status: 200}}
                end
            else 
                respond_to do |format|
                    format.json { render :json => {status: 422}}
                end
            end
          end
      end
    end
  end