class DashboardController < ApplicationController
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :authenticate_current_user

  def home
    @joined_societies_json = get_joined_societies()
  end
  
  def joined_societies
    @joined_societies_json = get_joined_societies()
  end

  def join_society
    @societies_json = []
    Society.all.each do |society|
      joined_members = Society.where(id: society.id).joins(:registrations).select('societies.*, COUNT(registrations.society_id) as joined_members').group('societies.id').length
      society_json = society.as_json
      society_json['joined_members'] = joined_members
      society_json['day'] = society.schedule.day
      society_json['start_time'] = society.schedule.start_time.strftime('%H:%M')
      society_json['end_time'] = society.schedule.end_time.strftime('%H:%M')
      @societies_json.push(society_json)
    end
  end
  
  def contact_society_administrator
    @society_administrators_json = User.joins(:societies).uniq
    if request.post?
      name = '#{@current_user.first_name} #{@current_user.last_name}'
      from_email = @current_user.email
      to_email = params[:to_email]
      subject = params[:name]
      content = params[:message]
      ContactMailer.contact_email(name, from_email, to_email, subject, content).deliver_now
    end
  end

  def edit_profile
  end

  protected

  def get_joined_societies
    joined_societies = Society.includes(:registrations).where('registrations.user_id': @current_user.id)
    joined_societies_json = []
    joined_societies.each do |society|
      society_json = society.as_json
      society_json['society_administrator'] = society.user
      society_json['day'] = society.schedule.day
      society_json['start_time'] = society.schedule.start_time.strftime('%H:%M')
      society_json['end_time'] = society.schedule.end_time.strftime('%H:%M')
      joined_societies_json.push(society_json)
  end

    return joined_societies_json
  end

end
