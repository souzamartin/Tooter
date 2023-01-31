User.destroy_all 
Toot.destroy_all
Tag.destroy_all
TootTag.destroy_all

u1 = User.create(username: 'Dragonmaster Adam', password: 'password', email: 'adam@flatiron.com', avatar_img: 'temp')
u2 = User.create(username: 'Wizard Sam', password: 'password', email: 'sam@flatiron.com', avatar_img: 'temp')

toot1 = Toot.create(content: 'potato', likes: 10, user_id: u1.id)
toot2 = Toot.create(content: 'meow', likes: 2, user_id: u1.id)
toot3 = Toot.create(content: 'wowzer', likes: 7, user_id: u1.id)
toot4 = Toot.create(content: 'U MADE IT THRU', likes: 9000, user_id: u2.id)
toot5 = Toot.create(content: 'ANOTHER DAY', likes: 9001, user_id: u2.id)

tag1 = Tag.create(tag_text: 'vegi')
tag2 = Tag.create(tag_text: 'animal')
tag3 = Tag.create(tag_text: 'random')

TootTag.create(toot_id: toot1.id, tag_id: tag1.id)
TootTag.create(toot_id: toot1.id, tag_id: tag3.id)
TootTag.create(toot_id: toot2.id, tag_id: tag2.id)
TootTag.create(toot_id: toot2.id, tag_id: tag3.id)
TootTag.create(toot_id: toot3.id, tag_id: tag3.id)
TootTag.create(toot_id: toot4.id, tag_id: tag3.id)
TootTag.create(toot_id: toot5.id, tag_id: tag3.id)

puts "Seeding complete"