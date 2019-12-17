require 'test_helper'

class Api::V1::RegistrationControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_registration_create_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_registration_create_url
    assert_response :success
  end

end
