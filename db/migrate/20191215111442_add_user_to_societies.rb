class AddUserToSocieties < ActiveRecord::Migration[6.0]
  def change
    add_reference :societies, :user, foreign_key: true, index: true
  end
end
