# Preview all emails at http://localhost:3000/rails/mailers/contact_mailer
class ContactMailerPreview < ActionMailer::Preview
    def contact_email
        ContactMailer.contact_email("anas@me.com",
        "Anas Yousef", "1234567890", @message = "Hello")
    end
end
