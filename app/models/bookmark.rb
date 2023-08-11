class Bookmark < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validates :user_id, uniquness: { scope: :board_id }
end
