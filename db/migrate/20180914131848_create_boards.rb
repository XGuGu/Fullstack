class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :user_id, null: false
      t.string :board_name, null: false
      t.timestamps
    end
  end
end
