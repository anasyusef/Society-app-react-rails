module Overrides

  class Overrides::RegistrationsController < DeviseTokenAuth::RegistrationsController

    def create
      params['role_id'] = Role.where(name: params['role_name'].titleize).take
      if !params['role_id'].nil?
        params['role_id'] = params['role_id'].id
      end
      params.delete :role_name
      super
    end
  end

end
