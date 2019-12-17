class Registration < ApplicationRecord
  belongs_to :user
  belongs_to :society
  validates :user, uniqueness: { scope: :society }
  validates :user, :society, presence: true
  validate :registration_cannot_be_society_admin_role

  def registration_cannot_be_society_admin_role
    if !self.user.nil?
        if !self.user.role.nil?
            if  self.user.role.name != "Member"
                errors.add(:user, "must be a Member")
            end
        end
    end
  end
end
