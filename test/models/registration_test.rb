require 'test_helper'

class RegistrationTest < ActiveSupport::TestCase
  test "should save if registration is not in the table" do
    @society = Society.new(name: "Football", max_people: 11, location: "Surrey Sports Park", brief_description: "Lorem ipsum", essentials: "Football kit")
    @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
    @role = Role.new(name: "Society Administrator")
    @role.save
    @user.role = @role
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @society.schedule = @schedule
    @society.user = @user

    @role = Role.new(name: "Member")
    @user1 = User.new(first_name: "Foo", last_name: "Bar", email: "foobar1@example.com", password: "random", encrypted_password: "random")
    @user1.role = @role
    
    assert Registration.new(user: @user1, society: @society).save!
  end

  test "should not save if there is already a row in the table" do
    @society = Society.new(name: "Football", max_people: 11, location: "Surrey Sports Park", brief_description: "Lorem ipsum", essentials: "Football kit")
    @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
    @role = Role.new(name: "Society Administrator")
    @role.save
    @user.role = @role
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @society.schedule = @schedule
    @society.user = @user

    @role = Role.new(name: "Member")
    @user1 = User.new(first_name: "Foo", last_name: "Bar", email: "foobar1@example.com", password: "random", encrypted_password: "random")
    @user1.role = @role
    @registration1 = Registration.new(user: @user1, society: @society).save
    @registration2 = Registration.new(user: @user1, society: @society)
    refute @registration2.valid?
  end

  test "should not save if schedule is blank" do
    refute Registration.new.valid?
  end

  test "should not save if role is Society Administrator" do
    @society = Society.new(name: "Football", max_people: 11, location: "Surrey Sports Park", brief_description: "Lorem ipsum", essentials: "Football kit")
    @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
    @role = Role.new(name: "Society Administrator")
    @role.save
    @user.role = @role
    @schedule = Schedule.new(day: "Tuesday", start_time: "14:00".to_time, end_time: "16:00".to_time)
    @society.schedule = @schedule
    @society.user = @user

    @role = Role.new(name: "Society Administrator")
    @user1 = User.new(first_name: "Foo", last_name: "Bar", email: "foobar1@example.com", password: "random", encrypted_password: "random")
    @user1.role = @role
    refute Registration.new(user: @user1, society: @society).valid?
  end

end
