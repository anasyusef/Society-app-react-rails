require 'test_helper'

class ContactMailerTest < ActionMailer::TestCase
  test "should return contact email" do
    mail = ContactMailer.contact_email("Anas Yousef", @from_email="hello@society.com", @to_email='me@society.com', @subject="Some content", @content = "Hello")
    assert_equal ['me@society.com'], mail.to
    assert_equal ['hello@society.com'], mail.from
  end
end
