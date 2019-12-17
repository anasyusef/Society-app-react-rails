# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  before_validation :normalize_name

  validates :first_name, :last_name, presence: true

  belongs_to :role
  has_many :registrations
  has_many :societies

  def normalize_name
    if !self.first_name.nil? and !self.last_name.nil?
        self.first_name.strip!
        self.last_name.strip!
        self.first_name = self.first_name.titleize
        self.last_name = self.last_name.titleize
    end
  end
end
