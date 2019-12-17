require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest

  def setup
    @role = Role.new(name: "Member")
    @user = User.new(first_name: "Test", last_name: "Test", password: "12345678", email: "testing111@test.com", role: @role)
    @user.save
  end

  test "should redirect to login for dashboard home" do
    get dashboard_home_url
    assert_response :redirect
  end

  test "should redirect to login for dashboard joined societies" do
    get dashboard_joined_societies_url
    assert_response :redirect
  end

  test "should redirect to login for dashboard join society" do
    get dashboard_join_society_url
    assert_response :redirect
  end

  test "should redirect to login for dashboard contact administrator" do
    get dashboard_contact_society_administrator_url
    assert_response :redirect
  end

  test "should redirect to login for dashboard edit profile" do
    get dashboard_edit_profile_url
    assert_response :redirect
  end

end
