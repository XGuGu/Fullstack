class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.text :description
      t.string :website_url
      t.integer :author_id, null: false
      t.string :url, null: false
      t.timestamps
    end
  end
end
