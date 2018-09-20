@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin, :id,:description,:url,:website_url, :author_id
    json.author pin.author
  end
end
