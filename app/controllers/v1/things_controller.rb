class V1::ThingsController < ApplicationController
  def index
    render json: {
      things: [
        {
          name: 'some-thing',
          guid: '3182738-123718-198a8a9-a83098n8-72387'
        },
        {
          name: 'some-thing-else',
          guid: '8719827-978237-j1h3h1h-a83098n8-87h12'
        }
      ]
    }.to_json
  end
end
