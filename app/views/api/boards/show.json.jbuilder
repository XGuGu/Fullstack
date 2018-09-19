json.extract! @board, :id,:board_name, :user_id
json.pins_belongs_to_this_board @board.pins
json.pincount @board.pins.count
json.board_author_icon @board.user.image_url
