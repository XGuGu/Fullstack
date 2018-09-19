# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
u1 = User.create(username: "starwar1",password: "123123",image_url: "http://3.bp.blogspot.com/-sKSFD5mr_es/UthZktu5sxI/AAAAAAAAf4Y/3SrKkdk7AlA/s1600/480px-1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png")
u2 = User.create(username: "starwar2",password: "123123",image_url: "https://s.pinimg.com/images/user/default_280.png")
u3 = User.create(username: "starwar3",password: "123123")

Board.destroy_all
b1 = Board.create(board_name: "Board1",user_id: u1.id)
b2 = Board.create(board_name: "Board2",user_id: u2.id)
b3 = Board.create(board_name: "Board3",user_id: u3.id)

Pin.destroy_all
p1 = Pin.create(author_id: u1.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/Ice-Cream-Piggie-1024x932.jpg")
p2 = Pin.create(author_id: u1.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/Albino-Hedgehogs-Yes-they-are-real.jpg")
p3 = Pin.create(author_id: u1.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/Cuttest-Little-Suger-Glider-1024x682.jpg")
p4 = Pin.create(author_id: u1.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/Now-Look-at-these-little-fellows-1024x777.jpg")
p5 = Pin.create(author_id: u1.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/Hi-there-1024x773.jpg")
p6 = Pin.create(author_id: u1.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/I-didnt-eat-all-the-carrots.jpg")
p7 = Pin.create(author_id: u2.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/You-didnt-see-me-okay.jpg")
p8 = Pin.create(author_id: u2.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/Peacefull-little-deer.jpg")
p9 = Pin.create(author_id: u2.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/No-Im-not-giving-you-any.jpg")
p10 = Pin.create(author_id: u2.id,url:"http://www.explosion.com/wp-content/uploads/2014/05/Its-tough.jpg")

Pinboard.destroy_all
Pinboard.create(pin_id: p1.id, board_id: b1.id)
Pinboard.create(pin_id: p1.id, board_id: b2.id)
Pinboard.create(pin_id: p1.id, board_id: b3.id)
Pinboard.create(pin_id: p2.id, board_id: b1.id)
Pinboard.create(pin_id: p2.id, board_id: b2.id)
Pinboard.create(pin_id: p2.id, board_id: b3.id)
Pinboard.create(pin_id: p3.id, board_id: b1.id)
Pinboard.create(pin_id: p3.id, board_id: b2.id)
Pinboard.create(pin_id: p3.id, board_id: b3.id)
Pinboard.create(pin_id: p4.id, board_id: b1.id)
Pinboard.create(pin_id: p5.id, board_id: b1.id)
Pinboard.create(pin_id: p6.id, board_id: b1.id)
Pinboard.create(pin_id: p7.id, board_id: b1.id)
Pinboard.create(pin_id: p8.id, board_id: b1.id)
Pinboard.create(pin_id: p9.id, board_id: b1.id)
Pinboard.create(pin_id: p10.id, board_id: b1.id)
