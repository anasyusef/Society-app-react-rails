class CreateSocieties < ActiveRecord::Migration[6.0]
  def change
    create_table :societies do |t|

      t.string :name, null: false
      t.index :name
      t.integer :max_people, null: false
      t.string :location, null: false
      t.string :brief_description, null: false
      t.string :essentials
      t.boolean :is_active, default: false
      t.references :schedule

      t.timestamps
    end
  end
end
