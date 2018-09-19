class Pin < ApplicationRecord
  validates :url, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :pinboards,
    primary_key: :id,
    foreign_key: :pin_id,
    class_name: :Pinboard

  has_many :boards,
    through: :pinboards,
    source: :board

    # def like
    #   return count
    # end
end
