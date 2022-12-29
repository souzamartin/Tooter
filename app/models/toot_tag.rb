class TootTag < ApplicationRecord
  belongs_to :toot
  belongs_to :tag

  def tag_label
    self.tag.tag_text
  end
end
