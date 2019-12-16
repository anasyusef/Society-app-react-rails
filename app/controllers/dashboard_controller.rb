class DashboardController < ApplicationController
  include DeviseTokenAuth::Concerns::SetUserByToken

  # before_action :authenticate_current_user

  def home
  end
  
  def joined_societies
  end

  def join_society
  end
  
  def contact_society_administrator
  end

  def edit_profile
  end

end
