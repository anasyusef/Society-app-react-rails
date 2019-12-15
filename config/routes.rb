Rails.application.routes.draw do
  namespace :dashboard do
    get 'home'
    get 'joined_societies'
    get 'join_society'
    get 'contact_society_administrator'
    get 'edit_profile'
  end
  get 'auth/sign_in'
  get 'auth/sign_out'
  get 'auth/forgot_password'
  get 'auth/sign_up'
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'overrides/registrations',
        token_validations: 'overrides/token_validations'
      }
      resources :societies
    end
  end
  root 'auth#sign_in'
end
