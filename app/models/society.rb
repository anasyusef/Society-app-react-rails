class Society < ApplicationRecord
    before_save :default_values

    validates :max_people, :location, :brief_description, presence: true
    validates :name, presence: true, uniqueness: true
    validate :society_cannot_be_member_role

    belongs_to :user
    belongs_to :schedule
    has_many :registrations

    def society_cannot_be_member_role
        if !self.user.nil?
            if !self.user.role.nil?
                if  self.user.role.name != "Society Administrator"
                    errors.add(:user, " must be a Society Administrator")
                end
            end
        end
    end

    def default_values
        self.is_active ||= false
    end
end