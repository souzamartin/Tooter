class CreateTootTags < ActiveRecord::Migration[7.0]
  def change
    create_table :toot_tags do |t|
      t.belongs_to :toot, null: false, foreign_key: true
      t.belongs_to :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
