require 'test_helper'

class AuthControllerTest < ActionDispatch::IntegrationTest
  test "should get sign_in" do
    get auth_sign_in_url
    assert_response :success
  end

  test "should get sign_out" do
    get auth_sign_out_url
    assert_response :success
  end

  test "should get forgot_password" do
    get auth_forgot_password_url
    assert_response :success
  end

end
