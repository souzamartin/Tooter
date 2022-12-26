class Toot < ApplicationRecord
  validates :content, presence: true, length: {maximum: 25}

  has_many :toot_tags, dependent: :destroy
  has_many :tags, through: :toot_tags

  belongs_to :user
end
