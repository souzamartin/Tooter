# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_23_163631) do
  create_table "tags", force: :cascade do |t|
    t.string "tag_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "toot_tags", force: :cascade do |t|
    t.integer "toot_id", null: false
    t.integer "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_toot_tags_on_tag_id"
    t.index ["toot_id"], name: "index_toot_tags_on_toot_id"
  end

  create_table "toots", force: :cascade do |t|
    t.string "content"
    t.integer "likes"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_toots_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "avatar_img"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "toot_tags", "tags"
  add_foreign_key "toot_tags", "toots"
  add_foreign_key "toots", "users"
end
