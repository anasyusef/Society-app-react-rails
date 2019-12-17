class Role < ApplicationRecord
    before_validation :normalize_name
    validates :name, presence: true, uniqueness: true
    has_many :users

    def normalize_name
        if !self.name.nil?
            self.name.strip!
            self.name = self.name.titleize
        end
    end
end
