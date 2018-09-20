json.extract! @pin, :id,:description,:url,:website_url, :author_id
json.likes @pin.pinboards.count
json.author @pin.author
