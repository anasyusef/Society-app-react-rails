Rails.application.routes.draw do
  namespace :dashboard do
    get 'home'
    get 'joined_societies'
    get 'join_society'
    get 'contact_society_administrator'
    get 'edit_profile'
  end

  namespace :auth do
    get 'sign_in'
    get 'sign_up'
    get 'forgot_password'
  end
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'overrides/registrations',
        token_validations: 'overrides/token_validations'
      }
      resources :societies
      resources :registrations
    end
  end
  root 'auth#sign_in'
end
