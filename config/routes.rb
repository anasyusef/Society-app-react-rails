Rails.application.routes.draw do
  get 'index/home'
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'overrides/registrations'
      }
    end
  end
  root 'index#home'
end
