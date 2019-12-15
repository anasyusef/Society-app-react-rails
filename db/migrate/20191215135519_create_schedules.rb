class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.string :day, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false

      t.timestamps
    end
  end
end
