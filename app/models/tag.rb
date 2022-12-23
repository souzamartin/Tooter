class Tag < ApplicationRecord
    has_many :toot_tags
    has_many :toots, through: :toot_tags
    
end
