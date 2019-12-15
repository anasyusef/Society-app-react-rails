Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'overrides/registrations',
        token_validations: 'overrides/token_validations'
      }
    end
  end
  root 'index#home'
  match '*path', to: 'index#home', via: :all
end
