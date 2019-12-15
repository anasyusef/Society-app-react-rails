class AddUniqueIndexToSchedules < ActiveRecord::Migration[6.0]
  def change
    add_index :schedules, [:day, :start_time, :end_time], unique: true
  end
end
