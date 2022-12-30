class TootTag < ApplicationRecord
  belongs_to :toot
  belongs_to :tag
end
