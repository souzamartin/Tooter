class TootSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :created_at
  has_one :user, serializer: TootUserSerializer
end
