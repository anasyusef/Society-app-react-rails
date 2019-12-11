class Api::V1::BaseController < ActionController::Base
    include DeviseTokenAuth::Concerns::SetUserByToken
    respond_to :json

    protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }  
    before_action :authenticate_user! 
  end