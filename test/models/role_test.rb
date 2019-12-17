require 'test_helper'

class RoleTest < ActiveSupport::TestCase
  test "should save if role is not in the table" do
    @role = Role.new(name: "society administrator")
    assert @role.save!
  end

  test "should not save if role is in the table" do
    @role = Role.new(name: "society administrator")
    @role_2 = Role.new(name: "society administrator")
    @role_2.save
    refute @role.valid?
  end

  test "should not save if role is blank" do
    refute Role.new.valid?
  end

  test "should normalize data after saving" do
    @role = Role.new(name: "random role")
    @role.save!
    assert "Random Role" == @role.name
  end
end
