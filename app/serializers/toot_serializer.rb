class TootSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes
  has_one :user
end
