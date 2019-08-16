class V1::ThingsController < ApplicationController
  def index
    render json: {
      things: [
        {
          name: 'some-thing',
          guid: '3182738-123718-198a8a9-a83098n8-72387'
        }
      ]
    }.to_json
  end
end
