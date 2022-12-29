class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar_img, :email
  
end
