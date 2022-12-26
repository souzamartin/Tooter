Rails.application.routes.draw do
  resources :toot_tags
  resources :tags
  resources :toots
  resources :users, only: [:create, :show, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#check'
  
end
