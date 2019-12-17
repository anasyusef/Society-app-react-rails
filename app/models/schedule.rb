class Schedule < ApplicationRecord
    has_many :societies

    validates :start_time, uniqueness: { scope: [:day, :end_time] }
    validate :start_time_cannot_be_greater_than_end_time
    validates :start_time, :end_time, :day, presence: true

    def start_time_cannot_be_greater_than_end_time
        if  !self.start_time.nil? && !self.end_time.nil?
            if  self.start_time > self.end_time
                errors.add(:start_time, " cannot be greater than end_time")
            end
        end
    end
end
