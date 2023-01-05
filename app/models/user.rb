class User < ApplicationRecord
    validates_presence_of :username, :password, :email
    validates :username, uniqueness: true

    has_many :toots, dependent: :destroy
    has_secure_password
    
end
