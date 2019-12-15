class Registration < ApplicationRecord
  belongs_to :user
  belongs_to :society
  validates :user, uniqueness: { scope: :society }
end
