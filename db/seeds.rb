User.destroy_all 
Toot.destroy_all
Tag.destroy_all
TootTag.destroy_all

u1 = User.create(username: 'Dragonmaster Adam', password: 'password', email: 'adam@flatiron.com')
u2 = User.create(username: 'Wizard Sam', password: 'password', email: 'sam@flatiron.com')
u3 = User.create(username: 'Sorcerer Ix', password: 'password', email: 'ix@flatiron.com')

toot0 = Toot.create(content: 'Rose is the best', likes: 18, user_id: u3.id)
toot1 = Toot.create(content: 'vim is the best', likes: 10, user_id: u1.id)
toot2 = Toot.create(content: 'cat on keyboard!!', likes: 9, user_id: u1.id)
toot3 = Toot.create(content: 'thinking about vhs store', likes: 0, user_id: u1.id)
toot4 = Toot.create(content: 'U MADE IT THRU', likes: 9000, user_id: u2.id)
toot5 = Toot.create(content: 'ANOTHER DAY', likes: 9001, user_id: u2.id)
toot6 = Toot.create(content: 'Rails rules, don\'t @ me', likes: 22, user_id: u3.id)

tag1 = Tag.create(tag_text: 'code stuff')
tag2 = Tag.create(tag_text: 'cats')
tag3 = Tag.create(tag_text: 'random')
tag4 = Tag.create(tag_text: 'catastrophe')

TootTag.create(toot_id: toot1.id, tag_id: tag1.id)
TootTag.create(toot_id: toot2.id, tag_id: tag2.id)
TootTag.create(toot_id: toot2.id, tag_id: tag3.id)
TootTag.create(toot_id: toot2.id, tag_id: tag4.id)
TootTag.create(toot_id: toot3.id, tag_id: tag1.id)
TootTag.create(toot_id: toot4.id, tag_id: tag3.id)
TootTag.create(toot_id: toot5.id, tag_id: tag3.id)
TootTag.create(toot_id: toot0.id, tag_id: tag2.id)
TootTag.create(toot_id: toot6.id, tag_id: tag1.id)

puts "Seeding complete"