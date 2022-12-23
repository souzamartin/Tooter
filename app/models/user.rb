class User < ApplicationRecord
    has_many :toots
    has_secure_password
    
end
