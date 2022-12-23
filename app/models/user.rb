class User < ApplicationRecord
    has_many :toots, dependent: :destroy
    has_secure_password
    
end
