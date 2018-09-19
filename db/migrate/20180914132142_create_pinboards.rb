class CreatePinboards < ActiveRecord::Migration[5.2]
  def change
    create_table :pinboards do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
      t.timestamps
    end
  end
end
