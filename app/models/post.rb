class Post < ApplicationRecord
  validates :body, presence: true, length: { maximum: 255 }
end
