class Toot < ApplicationRecord

  has_many :toot_tags
  has_many :tags, through: :toot_tags

  belongs_to :user
end
