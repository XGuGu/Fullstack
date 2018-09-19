class Pinboard < ApplicationRecord
  validates :pin_id, :board_id, presence: true

  belongs_to :pin,
    primary_key: :id,
    foreign_key: :pin_id,
    class_name: :Pin

  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board
    
end
