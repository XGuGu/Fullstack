@boards.each do |board|
  json.set! board.id do
    json.extract! board, :id,:board_name, :user_id
    json.pincount board.pins.count
    json.pins_belongs_to_this_board board.pins
  end
end
