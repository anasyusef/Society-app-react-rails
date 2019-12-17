class ApplicationMailer < ActionMailer::Base
  default to: "me@bar.com", from: 'foo@bar.com'
  layout 'mailer'
end
