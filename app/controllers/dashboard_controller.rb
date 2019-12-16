class DashboardController < ApplicationController
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :authenticate_current_user

  def home
  end
  
  def joined_societies
    @societies = Society.all
  end

  def join_society
    @societies_json = []
    Society.all.each do |society|
      joined_members = Society.where(id: society.id).joins(:registrations).select('societies.*, COUNT(registrations.society_id) as joined_members').group('societies.id').length
      society_json = society.as_json
      society_json['joined_members'] = joined_members
      @societies_json.push(society_json)
    end
    p @societies_json
  end
  
  def contact_society_administrator
  end

  def edit_profile
  end

end
