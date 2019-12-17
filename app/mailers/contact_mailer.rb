class ContactMailer < ApplicationMailer
    def contact_email(name, from_email, to_email, subject, content)
        @from_email = from_email
        @subject = subject
        @content = content
        mail cc: @from_email, to: to_email
    end
end
