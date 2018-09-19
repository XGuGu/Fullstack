Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: JSON} do
    resources :users
    resource :session
    resources :boards,only: [:index,:show,:create,:update,:destroy]
    resources :pins,only: [:index,:show,:create,:update,:destroy]
  end
  root "static_pages#root"
end
