Rails.application.routes.draw do
  resources :toot_tags
  resources :tags
  resources :toots
  resources :users, only: [:show]
end
