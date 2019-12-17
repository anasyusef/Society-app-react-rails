class ApplicationMailer < ActionMailer::Base
  default to: "me@society.com", from: "hello@society.com"
  layout 'mailer'
end
