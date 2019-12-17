module Api
    module V1
      class RegistrationsController < ApplicationController
        include ActionController::MimeResponds
  
        before_action :authenticate_api_v1_user!
  
          def create
            @society = Society.find(params[:id])
            @registration = Registration.new(society: @society, user: current_api_v1_user)
            
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

          def destroy
            p params
            @registration = Registration.where(user: current_api_v1_user, society_id: params[:id]).take
            if @registration.destroy!
              respond_to do |format|
              format.json { render :json => {society: @registration.society}}
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