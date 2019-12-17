require 'test_helper'

class ScheduleTest < ActiveSupport::TestCase
  test "should save if schedule is not in the table" do
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    assert @schedule.save!
  end

  test "should not save if there is already a row in the table" do
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @schedule_2 = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @schedule.save
    refute @schedule_2.valid?
  end

  test "should not save if schedule is blank" do
    refute Schedule.new.valid?
  end

  test "should not save if start_time is greater than end_time" do
    refute Schedule.new(day: "Tuesday", start_time: "17:00".to_time, end_time: "16:00".to_time).valid?
  end

end
