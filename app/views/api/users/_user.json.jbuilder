json.extract! user, :id, :username, :image_url
json.pins user.pins
json.boards user.boards.each do |board|
  json.extract! board, :id,:board_name
  json.pincount board.pins.count
  json.pins_belongs_to_this_board board.pins
end
