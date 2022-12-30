class TootTagSerializer < ActiveModel::Serializer
  attributes :id, :tag_label
  # has_one :toot
  # has_one :tag
end
