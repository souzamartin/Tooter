class CreateToots < ActiveRecord::Migration[7.0]
  def change
    create_table :toots do |t|
      t.string :content
      t.integer :likes
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
