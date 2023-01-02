Rails.application.routes.draw do
  # namespace :api do
    # resources :toot_tags
    resources :tags, only: [:index, :show, :create]
    resources :toots, only: [:index, :destroy]
    resources :users, only: [:create, :update, :destroy]

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/me', to: 'users#check'
    patch '/toots/:id/like', to: 'toots#increment_likes'
  # end

  # get '*path', to: 'fallback#index', constraints: ->(req) {!req.xhr? && req.format.html?} 
  
end
