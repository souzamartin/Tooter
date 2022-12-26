class Tag < ApplicationRecord
    validates :tag_text, presence: true, uniqueness: true

    has_many :toot_tags, dependent: :destroy
    has_many :toots, through: :toot_tags
    
end
