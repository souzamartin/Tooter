Rails.application.routes.draw do
  # namespace :api do
    resources :toot_tags
    resources :tags
    resources :toots
    resources :users, only: [:create, :update, :destroy]

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/me', to: 'users#check'
  # end

  # get '*path', to: 'fallback#index', constraints: ->(req) {!req.xhr? && req.format.html?} 
  
end
