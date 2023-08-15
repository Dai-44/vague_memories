Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root "static_pages#top"
  get 'login', to: "user_sessions#new"
  post 'login', to: "user_sessions#create"
  post 'guest_login', to: "user_sessions#guest_login"
  delete 'logout', to: "user_sessions#destroy"
  resources :users, only: %i[new create]
  resources :posts do
    get 'bookmarks', on: :collection
    resources :comments, only: %i[create destroy], shallow: true
  end
  resources :bookmarks, only: %i[create destroy]
end
