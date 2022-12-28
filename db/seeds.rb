User.destroy_all 
Toot.destroy_all
Tag.destroy_all
TootTag.destroy_all

# User Seed
u1 = User.create(username: 'Adam', password: 'password', email: 'adam@flatiron.com', avatar_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1200px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg')

# Toot Seed
toot1 = Toot.create(content: 'potato', likes: 10, user_id: u1.id)
toot2 = Toot.create(content: 'meow', likes: 2, user_id: u1.id)
toot3 = Toot.create(content: 'wowzer', likes: 7, user_id: u1.id)

# Tag Seed
tag1 = Tag.create(tag_text: 'vegi')
tag2 = Tag.create(tag_text: 'animal')
tag3 = Tag.create(tag_text: 'random')

# TootTag Seed
TootTag.create(toot_id: toot1.id, tag_id: tag1.id)
TootTag.create(toot_id: toot1.id, tag_id: tag3.id)
TootTag.create(toot_id: toot2.id, tag_id: tag2.id)
TootTag.create(toot_id: toot2.id, tag_id: tag3.id)
TootTag.create(toot_id: toot3.id, tag_id: tag3.id)

puts "Seeding complete"