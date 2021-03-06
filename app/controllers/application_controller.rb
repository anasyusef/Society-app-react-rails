class ApplicationController < ActionController::Base
    include DeviseTokenAuth::Concerns::SetUserByToken

    protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :role_id])
      devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name])
    end

    def get_current_user
      return nil unless cookies[:authHeaders]
      auth_headers = JSON.parse(cookies[:authHeaders])
  
      expiration_datetime = DateTime.strptime(auth_headers["expiry"], "%s")
      current_user = User.find_by(uid: auth_headers["uid"])
  
      if current_user &&
         current_user.tokens.has_key?(auth_headers["client"]) &&
         expiration_datetime > DateTime.now
  
        @current_user = current_user
      end
      @current_user
    end
  
    def authenticate_current_user
      redirect_to auth_sign_in_path, notice: t('login_requested') if get_current_user.nil?
    end
end