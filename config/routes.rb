Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end

  # Forward all requests to StaticController#index but requests
  # must be non-Ajax (!req.xhr?) and HTML Mime type (req.format.html?).
  get '*page', to: 'static#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  root 'static#index'
end
