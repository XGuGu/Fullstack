json.extract! @pin, :id,:description,:url,:website_url
json.likes @pin.pinboards.count
