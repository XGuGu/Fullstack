class Board < ApplicationRecord
  validates :board_name, :user_id, presence: true
 
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :pinboards,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Pinboard

  has_many :pins,
    through: :pinboards,
    source: :pin
end
