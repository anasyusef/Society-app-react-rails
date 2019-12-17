require 'test_helper'

class ContactMailerTest < ActionMailer::TestCase
  test "should return contact email" do
    mail = ContactMailer.contact_email("anas@me.com",
    "Anas Yousef", "1234567890", @message = "Hello")
    assert_equal ['me@bar.com'], mail.to
    assert_equal ['foo@bar.com'], mail.from
  end
end
