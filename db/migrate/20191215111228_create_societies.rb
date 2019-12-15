class CreateSocieties < ActiveRecord::Migration[6.0]
  def change
    create_table :societies do |t|
      t.string :name, null: false, unique: true
      t.integer :max_people, null: false
      t.string :location, null: false
      t.string :brief_description, null: false
      t.string :essentials
      t.boolean :is_active, default: false
      t.references :schedule, null: false

      t.timestamps
    end
  end
end
