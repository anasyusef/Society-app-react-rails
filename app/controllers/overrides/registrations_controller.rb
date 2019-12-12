module Overrides

  class Overrides::RegistrationsController < DeviseTokenAuth::RegistrationsController

    def create

      params['role_id'] = Role.where(name: params['role_name'].downcase).take
      if !params['role_id'].nil?
        params['role_id'] = params['role_id'].id
      end
      params.delete :role_name
      p params
      # params['role_name'] = Role.where(name: params['role_id'].downcase).take.id
      
    #   @new_user =  User.create!(first_name: params['first_name'], last_name: params['last_name'], email: params['email'], password: params['password'],
    #   password_confirmation: params['password_confirmation'])
    #   new_user.role = Role.where(name: params['role'].downcase).take]
    super
    end
  end

end
