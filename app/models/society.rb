class Society < ApplicationRecord
    before_save :default_values
    validates :name, :max_people, :location, :brief_description, presence: true
    belongs_to :user

    def default_values
        self.is_active ||= false
    end
end
