class TootSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :created_at
  has_one :user, serializer: TootUserSerializer
  has_many :toot_tags
end