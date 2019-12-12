require 'test_helper'

class Overrides::RegistrationControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get overrides_registration_create_url
    assert_response :success
  end

end
