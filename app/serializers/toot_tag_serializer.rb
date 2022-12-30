class TootTagSerializer < ActiveModel::Serializer
  attributes :id
  has_one :toot
  has_one :tag
end
