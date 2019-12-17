require 'test_helper'

class Api::V1::SocietyControllerTest < ActionDispatch::IntegrationTest

    def setup
        @role = Role.new(name: "Member")
        @role.save
        @user = User.new(first_name: "Test", last_name: "Test", password: "12345678", email: "testing111@test.com")
        @user.role = @role
        @user.save
    end

  test "should get societies" do
    @auth_headers = @user.create_new_auth_token
    get api_v1_societies_url, params: @auth_headers
    assert_response :success
  end

end
