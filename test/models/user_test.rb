require 'test_helper'

class UserTest < ActiveSupport::TestCase
    test "should save if user is not in the table" do
        @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
        @role = Role.new(name: "member")
        @role.save
        @user.role = @role
        assert @user.save!
    end

    test "should not save if user is in the table" do
        @role = Role.new(name: "member")
        @role.save
        @user = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
        @user_2 = User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random")
        @user.role = @role
        @user_2.role = @role
        @user_2.save
        refute @user.valid?
    end

    test "should not save if user is blank" do
        refute User.new.valid?
    end

    test "should not save if role from user is not assigned" do
        refute User.new(first_name: "Foo", last_name: "Bar", email: "foobar@example.com", password: "random", encrypted_password: "random").valid?
    end

    test "should not save if first name and last name is not assigned" do
        refute User.new(email: "foobar@example.com", password: "random", encrypted_password: "random").valid?
    end

    test "should normalize data after saving" do
        @user = User.new(first_name: " foo ", last_name: " bar", email: " foobar@example.com ", password: "random", encrypted_password: "random")
        @role = Role.new(name: "member")
        @role.save
        @user.role = @role
        @user.save
        assert "Foo" == @user.first_name and "Bar" == @user.last_name and "foobar@example.com" == @user.email
    end
end
