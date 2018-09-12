Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: JSON} do
    resource :users
    resource :session
  end
  root "static_pages#root"
end
