class AddUniqueIndexToRegistrations < ActiveRecord::Migration[6.0]
  def change
    add_index :registrations, [:society, :user], unique: true
  end
end
