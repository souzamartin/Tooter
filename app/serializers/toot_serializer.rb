class TootSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :created_at, :tag_labels
  has_one :user, serializer: TootUserSerializer
  # has_many :toot_tags
end