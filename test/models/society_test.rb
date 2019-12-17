require 'test_helper'

class SocietyTest < ActiveSupport::TestCase
  test "should save if society is not in the table" do
    @society = Society.new(name: "Football", max_people: 11, location: "Surrey Sports Park", brief_description: "Lorem ipsum", essentials: "Football kit")
    @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
    @role = Role.new(name: "Society Administrator")
    @role.save
    @user.role = @role
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @society.schedule = @schedule
    @society.user = @user
    assert @society.save!
  end

  test "should not save if society is in the table" do
    @society = Society.new(name: "Football", max_people: 11, location: "Surrey Sports Park", brief_description: "Lorem ipsum", essentials: "Football kit")
    @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
    @role = Role.new(name: "Society Administrator")
    @role.save
    @user.role = @role
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @society.schedule = @schedule
    @society.user = @user
    @society.save

    refute Society.new(name: "Football", max_people: 11, location: "Surrey Sports Park", brief_description: "Lorem ipsum", essentials: "Football kit", user: @user, schedule: @schedule).valid?
  end

  test "should not save if society is blank" do
    refute Society.new.valid?
  end

  test "should not save if user from society is not assigned" do
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @schedule.save
    refute Society.new(name: "Football", max_people: 11, location: "Surrey Sports Park", brief_description: "Lorem ipsum", essentials: "Football kit", schedule: @schedule).valid?
  end

  test "should not save if schedule from society is not assigned" do
    @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
    @role = Role.new(name: "Society Administrator")
    @user.save
    refute Society.new(name: "Football", max_people: 11, location: "Surrey Sports Park", brief_description: "Lorem ipsum", essentials: "Football kit", user: @user).valid?
  end

  test "should not save if name  max_people location brief_description are not assigned" do
    @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
    @role = Role.new(name: "Society Administrator")
    @user.save
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @schedule.save
    refute Society.new(essentials: "Football kit", user: @user, schedule: @schedule).valid?
  end

end
